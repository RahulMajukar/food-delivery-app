import React from 'react';

const TermsAndConditions = () => {
    // Get the current date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div>
            <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and conditions</h1>
                    <div className="prose prose-lg text-gray-600">
                        <p>
                            This Privacy Policy describes how HackifyTech collects, uses, and
                            discloses information that we obtain through our website and
                            services.
                        </p>
                        <h2 className="font-semibold text-xl mt-8 mb-4">Information We Collect</h2>
                        <p>
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc ml-6 mb-4">
                            <li>Personal Information: We may collect your name, email address, and other personal information when you provide it to us.</li>
                            <li>Usage Information: We may collect information about your usage of our website and services, such as the pages you visit and your interactions with our content.</li>
                        </ul>
                        <h2 className="font-semibold text-xl mt-8 mb-4">Use of Information</h2>
                        <p>
                            We may use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc ml-6 mb-4">
                            <li>Providing and improving our services</li>
                            <li>Personalizing your experience</li>
                            <li>Communicating with you</li>
                            <li>Analyzing trends and user behavior</li>
                        </ul>
                        <h2 className="font-semibold text-xl mt-8 mb-4">Disclosure of Information</h2>
                        <p>
                            We may disclose your information to third parties in certain circumstances, such as:
                        </p>
                        <ul className="list-disc ml-6 mb-4">
                            <li>With your consent</li>
                            <li>To comply with legal obligations</li>
                            <li>For business transactions</li>
                            <li>For marketing and advertising purposes</li>
                        </ul>
                        <h2 className="font-semibold text-xl mt-8 mb-4">Updated Date</h2>
                        <p>The terms and conditions were last updated on {currentDate}.</p>
                        {/* Add more sections as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;