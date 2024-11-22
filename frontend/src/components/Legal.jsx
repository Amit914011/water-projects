import React, { useState } from "react";

const Legal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Terms and Conditions",
      answer: "These terms and conditions Terms set out the various rules and procedures that apply when You access and use the Website, create and maintain an Account with Us, purchase Credit and/or Enter a Draw... Read More",
    },
    {
      question: "Privacy Policy",
      answer: "This Platform collects some Personal Data from its Users. This Privacy Policy has a section dedicated to Californian consumers and their privacy rights. This Privacy Policy can be printed for reference by using the print command in the settings of any browser. Read More",
    },
    {
      question: "Cookie Policy",
      answer: "Cookies and other Identiﬁers consist of portions f code placed on the User’s device that assist he Owner in providing the Service according to the purposes described.Some of the purposes for which Identiﬁers are used may also require the User's consent. Whenever consent is given... Read More",
    },
    {
      question: "Social Media Community Guidelines",
      answer: "Mahzooz Social Media Mahzooz SM accounts are intended to provide users with a place to connect and to share their experiences and stories. Read More",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" text-gray-800 py-10 mt-36">
      <div className="container mx-auto px-4 w-[600px] ">
        <h2 className="text-3xl font-bold mb-8">Legal</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 transition ${
                activeIndex === index ? "bg-blue-50 border-blue-500" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span
                  className={`text-2xl transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC;
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;
