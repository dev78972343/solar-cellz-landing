import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Input } from "@/components/ui/input";
import { MailsIcon, Home, PhoneCall, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Contact({ className }) {
  return (
    <ResponsiveContainer
      classes={cn(className, "flex flex-col items-start justify-center gap-10 p-10 md:flex-row")}
    >
      {/* Form Section */}
      <div className="w-full rounded-lg bg-[#dff2fe] p-8 shadow md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Fill the form</h2>

        <form className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <InputField label="First Name" id="firstName" type="text" placeholder="First Name" />

          {/* Last Name */}
          <InputField label="Last Name" id="lastName" type="text" placeholder="Last Name" />

          {/* Phone Number */}
          <InputField label="Phone Number" id="phone" type="text" placeholder="Your Phone Number" />

          {/* Email */}
          <InputField label="Email Address" id="email" type="email" placeholder="Your email address" />

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="w-full resize-none border-[#545454] bg-white text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <PrimaryButton className="h-11 w-full">Submit</PrimaryButton>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="self-center w-full space-y-5 md:w-1/2">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <ContactInfo
          icon={<MapPin className="size-5 text-white" />}
          label="Address"
          content="3540 Toringdon Way, Suite 200 Charlotte, North Carolina 28277, United States"
        />
        <ContactInfo
          icon={<PhoneCall className="size-5 text-white" />}
          label="Phone Number"
          content="980-729-7442"
        />
        <ContactInfo
          icon={<MailsIcon className="size-5 text-white" />}
          label="Email"
          content="info@solarcellzusa.com"
        />
        <ContactInfo
          icon={<Home className="size-5 text-white" />}
          label="Showroom"
          content="10924 Granite St Suite 400 Charlotte NC 28273"
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
