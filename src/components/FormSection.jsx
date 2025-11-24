import React, { useState } from "react";

function FormSection() {
    const [showMore, setShowMore] = useState(false);

    const handleReveal = () => {
        if (!showMore) setShowMore(true);
    };

    return (
        <div className="py-20 px-6 bg-[#30332E] flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-white font-serif text-center mb-3">
                SIGN-UP FOR OUR NEWSLETTER
            </h2>

            <p className="text-[#5E615D] text-center max-w-xl mb-10">
                Sign up to our newsletter and keep up to date with all our exciting
                happenings and offers.
            </p>

            <form className="w-full max-w-3xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="mb-1 font-medium text-[#5E615D]">
                            Title *
                        </label>
                        <select
                            name="title"
                            id="title"
                            onFocus={handleReveal}
                            className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                        >
                            <option></option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                            <option>Ms.</option>
                            <option>Dr.</option>
                            <option>Prof.</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="firstName"
                            className="mb-1 font-medium text-[#5E615D]"
                        >
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            required
                            onFocus={handleReveal}
                            className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="lastName"
                            className="mb-1 font-medium text-[#5E615D]"
                        >
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            required
                            onFocus={handleReveal}
                            className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                        />
                    </div>
                </div>

                <div
                    className={`transition-all duration-500 overflow-hidden ${showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="mt-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="mb-1 font-medium text-[#5E615D]"
                            >
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                            />
                        </div>
                    </div>

                    <p className="text-[#5E615D] mt-6 mb-4">
                        While not mandatory, the below information will assist us in
                        curating content that is relevant to you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="birth"
                                className="mb-1 font-medium text-[#5E615D]"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="birth"
                                className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="country"
                                className="mb-1 font-medium text-[#5E615D]"
                            >
                                Country of Residence
                            </label>
                            <select
                                id="country"
                                className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                            >
                                <option>United States</option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="children"
                                className="mb-1 font-medium text-[#5E615D]"
                            >
                                Children
                            </label>
                            <select
                                id="children"
                                className="border border-[#5E615D] p-3 bg-transparent text-[#5E615D]"
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>

                    <p className="text-[#5E615D] text-sm mt-6 leading-relaxed">
                        By signing up, you declare that you have read Sani Resort’s
                        <a href="#" className="underline font-semibold">
                            Terms & Conditions
                        </a>
                        and consent to receive offers, information and content via current
                        means of communication as per our
                        <a href="#" className="underline font-semibold">
                            Privacy Policy.
                        </a>
                    </p>

                    <div className="flex mt-4 justify-center items-center">
                        <button
                            type="submit"
                            className="border border-[#5E615D] py-3 px-5 bg-transparent text-[#5E615D]"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormSection;
