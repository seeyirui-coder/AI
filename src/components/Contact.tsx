import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactElement } from "react";
import { CONTACT_ITEMS } from "../data/site";
import type { ContactFormData, InterestOption } from "../types";

const INTEREST_OPTIONS: InterestOption[] = [
  "Buying a home",
  "Selling a property",
  "Rental search",
  "Investment advice",
];

const INITIAL_FORM: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  interest: "Buying a home",
  message: "",
};

type IconName = "mail" | "phone" | "pin";

const ICONS: Record<IconName, ReactElement> = {
  mail: (
    <>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  phone: (
    <path
      d="M6 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  pin: (
    <>
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
};

const ITEM_ICONS: IconName[] = ["mail", "phone", "pin"];

function Contact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [note, setNote] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!form.name.trim() || !emailOk) {
      setNote({ text: "Please add your name and a valid email.", isError: true });
      return;
    }

    setNote({
      text: `Thanks, ${form.name.trim()} — I'll be in touch within one business day.`,
      isError: false,
    });
    setForm(INITIAL_FORM);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Let's find your next address.</h2>
          <p>Tell me what you're looking for and I'll get back to you within one business day.</p>

          <ul className="contact__list">
            {CONTACT_ITEMS.map((item, index) => (
              <li key={item.label}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none">
                    {ICONS[ITEM_ICONS[index]]}
                  </svg>
                </span>
                <div>
                  <small>{item.label}</small>
                  {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form__row">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>I'm interested in</span>
            <select name="interest" value={form.interest} onChange={handleChange}>
              {INTEREST_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me a little about what you're after..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn btn--primary btn--block">
            Send message
          </button>
          <p className={`form__note${note.isError ? " is-error" : ""}`} role="status">
            {note.text}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
