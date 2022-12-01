import Link from "next/link";
import { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

import { MdOutlineAttachEmail, MdPhone } from "react-icons/md";
import LinkBtnPrimary from "../linkbtnprimary";

const inputClassName =
  "mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none";

interface Values {
  fullname: string;
  email: string;
  subject: string;
  messages: string;
}

const ContactSection: FC = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-b from-[#F0F0F0] to-white  px-4 lg:px-0">
        <div className="mx-auto flex w-full max-w-6xl flex-col space-y-10 py-20">
          <div className="flex flex-wrap gap-y-2">
            <div className="flex basis-full flex-col lg:basis-1/2">
              <div className="text-[20px] font-bold">PT. ERP Indonesia</div>
              <div>
                Komplek Green Ville, Jalan Ratu Kemuning Blok BL No. 1,
                RT08/RW14, DKI Jakarta
              </div>
            </div>
            <div className="flex basis-full flex-wrap gap-2 lg:basis-1/2 lg:justify-end">
              <Link
                href="mailto:corporate@erp.co.id"
                target="_blank"
                className="flex items-center justify-center space-x-2 self-end rounded-full border bg-white py-2 px-6 shadow-lg"
              >
                <MdOutlineAttachEmail className="h-6 w-6" />
                <span className="">corporate@erp.co.id</span>
              </Link>
              <Link
                href="tel:02122513339"
                target="_blank"
                className="flex items-center justify-center space-x-2 self-end rounded-full border bg-white py-2 px-6 shadow-lg"
              >
                <MdPhone className="h-6 w-6" />
                <span className="">021-000-3366</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-4 lg:px-0">
            <div className="w-full">
              <div className="relative aspect-square rounded-sm border bg-white p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7074224393273!2d106.77299351476891!3d-6.1699172455330675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7e325d192e5%3A0xc532e3c19ceefb0e!2sPerumahan%20Green%20Ville!5e0!3m2!1sen!2sid!4v1669821049795!5m2!1sen!2sid"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full">
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  subject: "",
                  messages: "",
                }}
                onSubmit={(
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 500);
                }}
              >
                <Form className="flex h-full w-full flex-col space-y-2">
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Full Name
                    </span>
                    <Field
                      id="fullname"
                      name="fullname"
                      type="text"
                      className={inputClassName}
                    />
                  </label>
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={inputClassName}
                    />
                  </label>
                  <label className="block">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Subject
                    </span>
                    <Field
                      id="subject"
                      name="subject"
                      type="text"
                      className={inputClassName}
                    />
                  </label>
                  <label className="flex h-full w-full flex-col place-items-stretch items-stretch">
                    <span className="ml-4 block text-sm font-medium text-slate-700">
                      Message
                    </span>
                    <Field
                      as="textarea"
                      id="messages"
                      name="messages"
                      type="text"
                      className={inputClassName + " w-full"}
                    />
                  </label>
                  <div className="flex justify-end">
                    <LinkBtnPrimary href="#"> SEND </LinkBtnPrimary>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
