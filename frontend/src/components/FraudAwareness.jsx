import React from "react";
import fraudImage from '../assets/fraud_awareness_desktop_en_715a8865a5.webp'

export default function FraudAwareness() {
  return (
    <div className=" py-10 px-5 mt-32">
        <div>
            <img src={fraudImage} alt="" className="m-auto" />
        </div>
      <div className=" mx-auto bg-white  rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-600  mb-6">
          Protect Yourself
        </h1>
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            We would like to warn all participants of fraudulent scams. Prize
            scams are one of the most prevalent consumer frauds which target
            individuals through telephone and direct email. Victims are enticed
            with false promises of cash prizes and luxury goods in exchange for
            an up-front fee and/or personal information.
          </p>
          <p>
            You may receive communications that use real organizations' logos,
            such as ours, informing you that you have won cash prizes in a
            draw, and ask you to provide, over email, personal information to
            verify that you are the correct winner or to send your bank
            credentials to claim prizes. Scammers then use these details to
            misuse your identity, embezzle money or use it for other fraudulent
            activities.
          </p>
          <p>
            Scammers may also use 'spoof' (phishing) websites which appear to
            be genuine versions of our website. These sites attempt to access
            personal information such as usernames, passwords, and even bank
            account or credit card details under the pretense that you are
            dealing with legitimate companies. If you are in any doubt
            whatsoever about correspondence you may have received from us,
            please do not click on any links in it and contact our Customer
            Support Centre on{" "}
            <a
              href="tel:8005825"
              className="text-blue-500 hover:underline font-medium"
            >
              800 5825
            </a>{" "}
            or{" "}
            <a
              href="tel:+97145713410"
              className="text-blue-500 hover:underline font-medium"
            >
              +971 4 571 3410
            </a>{" "}
            from outside the UAE (or email{" "}
            <a
              href="mailto:customer.support@mahzooz.ae"
              className="text-blue-500 hover:underline font-medium"
            >
              customer.support@mahzooz.ae
            </a>
            ) to make sure that this is authentic.
          </p>
          <p>
            All prizes must be withdrawn or transferred from your Winnings
            Balance which can be accessed via your Mahzooz account on our
            website. To make sure you're on our site, please type{" "}
            <a
              href="https://www.mahzooz.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              www.mahzooz.ae
            </a>{" "}
            directly into your browser, rather than selecting links in emails.
          </p>
          <p className="font-bold">
            Please remember that Mahzooz will never ask you for money to release
            a prize.
          </p>
          <p>
            We will take measures against any person found cheating or
            attempting to cheat or defraud us or any of our participants. This
            includes fraudulent payments, use of stolen cards, or any other
            unlawful transaction.
          </p>
          <p>
            We take every precaution to protect your personal information. Any
            sensitive information provided by you via the website or app will
            be guarded by industry-standard encryption technologies.
          </p>
          <p>
            We may use your information where it is necessary to meet our legal
            obligations or to detect and prevent fraud, money-laundering, and
            other crimes, to protect your interests or the interests of others.
            This may include in the event of misconduct such as identity theft
            or fraud.
          </p>
          <p>
            If you think you have been the victim of a scam, please contact our
            Customer Support on{" "}
            <a
              href="tel:8005825"
              className="text-blue-500 hover:underline font-medium"
            >
              800 5825
            </a>{" "}
            inside the UAE or{" "}
            <a
              href="tel:+97145880100"
              className="text-blue-500 hover:underline font-medium"
            >
              +971 4 588 0100
            </a>{" "}
            from outside the UAE (or email us at{" "}
            <a
              href="mailto:customer.support@mahzooz.ae"
              className="text-blue-500 hover:underline font-medium"
            >
              customer.support@mahzooz.ae
            </a>
            ).
          </p>
        </div>
      </div>
    </div>
  );
}
