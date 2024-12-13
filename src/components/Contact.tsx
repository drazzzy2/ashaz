import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let's discuss how we can help transform your business.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-10 lg:pl-8">
            <div className="flex gap-x-4">
              <Mail className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">Email</h3>
                <p className="mt-2 text-gray-600">contact@agency.io</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Phone className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="text-base font-semibold text-gray-900">Location</h3>
                <p className="mt-2 text-gray-600">123 Innovation Street<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}