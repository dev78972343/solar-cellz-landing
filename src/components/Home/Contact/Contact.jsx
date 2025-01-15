import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Input } from "@/components/ui/input";
import { MailsIcon, Home, PhoneCall, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Contact({ className }) {
  const { t } = useTranslation();
  return (
    <ResponsiveContainer
      classes={cn(className, "flex flex-col items-start justify-center gap-10 md:flex-row")}
    >
      {/* Form Section */}
      <div className="w-full rounded-lg bg-[#dff2fe] p-4 lg:p-8 shadow md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">{t("contact.form.title")}</h2>

        <form className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <InputField label={t(`contact.form.fields.0.label`)} id="firstName" type="text" placeholder={t(`contact.form.fields.0.placeholder`)} />

          {/* Last Name */}
          <InputField label={t(`contact.form.fields.1.label`)} id="lastName" type="text" placeholder={t(`contact.form.fields.1.placeholder`)} />

          {/* Phone Number */}
          <InputField label={t(`contact.form.fields.2.label`)} id="phone" type="text" placeholder={t(`contact.form.fields.2.placeholder`)} />

          {/* Email */}
          <InputField label={t(`contact.form.fields.3.label`)} id="email" type="email" placeholder={t(`contact.form.fields.3.placeholder`)} />

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm text-gray-700">
              {t(`contact.form.fields.4.label`)}
            </label>
            <Textarea
              id="message"
              rows="4"
              placeholder={t(`contact.form.fields.4.placeholder`)}
              className="w-full resize-none border-[#545454] bg-white text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <PrimaryButton className="h-11 w-full">{t("contact.form.submitButton.text")}</PrimaryButton>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="self-center w-full space-y-5 md:w-1/2">
        <h2 className="text-2xl font-bold">{t("contact.contactInfo.title")}</h2>
        <ContactInfo
          icon={<MapPin className="size-5 text-white" />}
          label={t(`contact.contactInfo.items.0.label`)}
          content={t(`contact.contactInfo.items.0.content`)}
        />
        <ContactInfo
          icon={<PhoneCall className="size-5 text-white" />}
          label={t(`contact.contactInfo.items.1.label`)}
          content={t(`contact.contactInfo.items.1.content`)}
        />
        <ContactInfo
          icon={<MailsIcon className="size-5 text-white" />}
          label={t(`contact.contactInfo.items.2.label`)}
          content={t(`contact.contactInfo.items.2.content`)}
        />
        <ContactInfo
          icon={<Home className="size-5 text-white" />}
          label={t(`contact.contactInfo.items.3.label`)}
          content={t(`contact.contactInfo.items.3.content`)}
        />
      </div>
    </ResponsiveContainer>
  );
}

function InputField({ label, id, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-gray-700">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 w-full border-[#545454] bg-white text-black"
      />
    </div>
  );
}

function ContactInfo({ icon, label, content }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-center aspect-square size-10 rounded-full bg-[#2196F3]">
        {icon}
      </div>
      <p>
        <strong>{label}</strong> <br />
        {content}
      </p>
    </div>
  );
}
