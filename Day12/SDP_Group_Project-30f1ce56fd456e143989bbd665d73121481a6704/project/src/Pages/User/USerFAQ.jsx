import React from 'react';

const UserFAQ = () => {
  return (
    <section className='text-black dark:text-white'>
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl text-primary dark:text-primary-dark">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-black dark:text-white">
          Questions Asked By Our Customers
        </p>
        <div className="space-y-4">
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Term Insurance?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 240 months (20 years)<br />
              <strong>Amount:</strong> ₹5,00,000<br />
              <strong>Description:</strong> Provides coverage for a specified term (20 years). If the insured person dies during the term, the beneficiaries receive the death benefit. It's typically more affordable than permanent life insurance policies.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Whole Life Insurance?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 360 months (30 years)<br />
              <strong>Amount:</strong> ₹7,50,000<br />
              <strong>Description:</strong> Offers lifetime coverage with fixed premiums, a death benefit, and a cash value component that grows over time. The policy remains in force as long as premiums are paid.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Universal Insurance?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 180 months (15 years)<br />
              <strong>Amount:</strong> ₹4,00,000<br />
              <strong>Description:</strong> Provides flexible premiums and adjustable death benefits. It includes a cash value component that earns interest. Policyholders can adjust their coverage and premium payments within certain limits.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Variable Life Insurance?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 300 months (25 years)<br />
              <strong>Amount:</strong> ₹6,00,000<br />
              <strong>Description:</strong> Combines life insurance with investment options. Policyholders can invest the cash value in various sub-accounts, which can potentially grow the policy’s cash value and death benefit, but it also carries investment risk.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Final Expense Insurance?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 120 months (10 years)<br />
              <strong>Amount:</strong> ₹1,00,000<br />
              <strong>Description:</strong> Specifically designed to cover funeral and burial expenses. It's typically a small policy with a lower death benefit, aimed at helping beneficiaries manage end-of-life expenses without financial burden.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Retirement Plan?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 480 months (40 years)<br />
              <strong>Amount:</strong> ₹10,00,000<br />
              <strong>Description:</strong> Aimed at providing a substantial benefit upon retirement. It combines long-term savings with life insurance, ensuring that you have financial security in your retirement years.
            </p>
          </details>
          <details className="w-full border border-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark">
              What is LifePlus Child Education Plan?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              <strong>Duration:</strong> 180 months (15 years)<br />
              <strong>Amount:</strong> ₹2,00,000<br />
              <strong>Description:</strong> Designed to provide financial support for your child's education. This plan helps ensure that your child’s educational expenses are covered, providing peace of mind for parents.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default UserFAQ;
