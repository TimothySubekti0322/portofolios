import React, { useState, useEffect } from "react";
import { roboto_mono } from "@/fonts";
import { checkContactForm } from "@/utils/checkForm";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [form, setForm] = useState(initialForm);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == "email" && e.target.value !== "") {
      setEmailError("");
    }
    if (e.target.name == "name" && e.target.value !== "") {
      setNameError("");
    }
    if (e.target.name == "message" && e.target.value !== "") {
      setMessageError("");
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    const checkForm = checkContactForm(
      form.name,
      setNameError,
      form.email,
      setEmailError,
      form.message,
      setMessageError
    );
    if (checkForm) {
      return;
    } else {
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID! as string;
    const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID! as string;
    const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! as string;
    try {
      const response = await emailjs.send(
        service_id,
        template_id,
        form,
        public_key
      );
      console.log(response);
      if (response.status === 200) {
        setForm(initialForm);
        const modal = document.getElementById(
          "my_modal_1"
        ) as HTMLDialogElement;
        if (modal) {
          modal.close();
          toast.success("Your Message is Successfully Sent 🚀");
        }
      }
    } catch (error: any) {
      console.log("FAILED... = ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Toaster />
      <div className="w-full flex justify-center items-center mt-8 md:mt-12">
        <div
          className={`w-[90%] md:w-[80%] xl:w-[50%] dark:bg-[#13171f] bg-[#313A54] p-6 flex flex-col rounded-xl gap-y-6 md:gap-y-8 ${roboto_mono.className}`}
          data-aos="zoom-in-up"
        >
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold text-white">Name</label>
            <input
              type="text"
              name="name"
              className={`bg-white text-[#13171F] rounded-xl py-3 px-3 ${
                nameError == "" ? "" : "border-2 border-red-500"
              }`}
              placeholder="what's your name ..."
              onChange={handleChange}
              value={form.name}
            />
            {nameError && <span className="text-red-500">{nameError}</span>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold text-white">Email</label>
            <input
              type="text"
              name="email"
              className={`bg-white text-[#13171F] rounded-xl py-3 px-3 ${
                emailError == "" ? "" : "border-2 border-red-500"
              }`}
              onChange={handleChange}
              value={form.email}
              placeholder="what's your email ..."
            />
            {emailError && <span className="text-red-500">{emailError}</span>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold text-white">Message</label>
            <textarea
              name="message"
              className="bg-white text-[#13171F] rounded-xl py-3 px-3 h-48"
              placeholder="what's your message ..."
              value={form.message}
              onChange={handleChange}
            />
            {messageError && (
              <span className="text-red-500">{messageError}</span>
            )}
          </div>
          <button
            className="bg-[#03B18D] text-white py-3 rounded-xl hover:bg-[#01906B] active:bg-[#01906B] mt-4"
            onClick={openModal}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Modals */}
      <dialog
        id="my_modal_1"
        className="modal modal-bottom sm:modal-middle text-white"
      >
        <div className="modal-box bg-[#313A54] dark:bg-[#13171F]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-6">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg w-full text-center">
            Confirm Your Details
          </h3>
          <p className="py-4">
            <strong>Name:</strong> {form.name}
          </p>
          <p className="py-4">
            <strong>Email:</strong> {form.email}
          </p>
          <p className="pt-4">
            <strong>Message:</strong> {form.message}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn bg-[#00C6BF] text-black hover:bg-[#00A49D] active:bg-[#00A49D] border-none"
                onClick={handleSubmit}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Form;
