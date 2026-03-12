'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa6'
import { FiMail, FiMapPin } from 'react-icons/fi'
import axios from 'axios'

interface ContactFormData {
  name: string
  email: string
  subject: string
  body: string
}

const contactInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Brazil' },
  { icon: FiMail, label: 'Email', value: 'carlosepsaboya@gmail.com' },
]

const contactSocials = [
  { href: 'https://www.linkedin.com/in/carlossaboya/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/cadusaboya', icon: FaGithub, label: 'GitHub' },
  { href: 'https://medium.com/@carlosepsaboya', icon: FaMedium, label: 'Medium' },
  { href: 'https://web.whatsapp.com/send?phone=+5591984147769', icon: FaWhatsapp, label: 'WhatsApp' },
]

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()
  const [isDisabled, setIsDisabled] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (isSent) {
      setStatus('error')
      setMessage('Already sent a message. Please wait for a response.')
      return
    }

    setIsDisabled(true)
    setStatus('idle')
    try {
      const response = await axios.post('/api/send/', data)
      setMessage(response.data.message)
      setStatus('success')
      setIsSent(true)
    } catch {
      setMessage('Failed to send email.')
      setStatus('error')
    } finally {
      setIsDisabled(false)
    }
  }

  const inputBase = 'w-full px-4 py-3 rounded-xl bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200'

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left: Contact info */}
      <div className="lg:w-1/3 flex flex-col gap-6">
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-text-muted">{item.label}</p>
                <p className="text-sm text-text-primary font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 lg:justify-start justify-center">
          {contactSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-surface border border-border
                         text-text-secondary hover:text-primary hover:border-primary
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1">
        <form
          className="w-full bg-surface border border-border rounded-2xl p-6 sm:p-8"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-1.5" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                className={`${inputBase} border ${errors.name ? 'border-red-400' : 'border-border'}`}
                type="text"
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className={`${inputBase} border ${errors.email ? 'border-red-400' : 'border-border'}`}
                type="email"
                placeholder="john@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-text-secondary text-sm font-medium mb-1.5" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              className={`${inputBase} border ${errors.subject ? 'border-red-400' : 'border-border'}`}
              type="text"
              placeholder="Project collaboration"
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
          </div>

          <div className="mb-5">
            <label className="block text-text-secondary text-sm font-medium mb-1.5" htmlFor="body">
              Message
            </label>
            <textarea
              id="body"
              className={`${inputBase} border ${errors.body ? 'border-red-400' : 'border-border'} min-h-[140px] resize-y`}
              placeholder="Tell me about your project..."
              {...register('body', { required: 'Message is required' })}
            />
            {errors.body && <p className="text-red-400 text-xs mt-1">{errors.body.message}</p>}
          </div>

          <button
            disabled={isDisabled}
            type="submit"
            className="w-full px-8 py-3 rounded-xl bg-primary text-white font-medium text-sm
                       hover:bg-primary-hover transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDisabled ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <p className={`mt-4 text-center text-sm ${
              status === 'error' ? 'text-red-400' : 'text-green-400'
            }`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactForm
