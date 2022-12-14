import React from 'react';

const Faq = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Why you choose us?</h3>
                        <p className="mt-1 dark:text-gray-400">Because we are trusted & never broke you heart!</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Can we get the certificate after complete the Course?</h3>
                        <p className="mt-1 dark:text-gray-400">Of course! if you go through with us</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Does there any oppurtunity to get scholarship?</h3>
                        <p className="mt-1 dark:text-gray-400">After completion ,thers slighlty a chance for next course!</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Can we choose our Instructor by ourselves?</h3>
                        <p className="mt-1 dark:text-gray-400">Yes you can if the mentor avialable!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;