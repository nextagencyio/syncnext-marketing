import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Homepage
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>

          <div className="prose prose-blue max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to PressX. These Terms of Service govern your use of our website and services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using PressX, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              PressX provides a headless WordPress solution that combines WordPress as a backend CMS with Next.js for the frontend.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. User Conduct</h2>
            <p className="text-gray-600 mb-4">
              You agree to use PressX only for lawful purposes and in accordance with these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, features, and functionality of PressX, including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are owned by PressX, its licensors, or other providers.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our service may contain links to third-party websites or services that are not owned or controlled by PressX.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall PressX be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
