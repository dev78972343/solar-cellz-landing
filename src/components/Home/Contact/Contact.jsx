import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { Input } from "@/components/ui/input";
import { MailsIcon } from "lucide-react";
import { Home } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Contact({ className }) {
  return (
    <ResponsiveContainer classes={cn(className,"flex flex-col items-start justify-center gap-10 p-10 md:flex-row")}>

       {/* Form Section */}
       <div className="w-full rounded-lg bg-[#dff2fe] p-8 shadow md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Fill the form</h2>

        <form className="grid grid-cols-2 gap-4">
  {/* First Name */}
  <div>
    <label htmlFor="firstName" className="mb-1 block text-sm text-gray-700">
      First Name
    </label>
    <Input
      id="firstName"
      type="text"
      placeholder="First Name"
      className="h-11 w-full border-[#545454] bg-white text-black"
    />
  </div>

  {/* Last Name */}
  <div>
    <label htmlFor="lastName" className="mb-1 block text-sm text-gray-700">
      Last Name
    </label>
    <Input
      id="lastName"
      type="text"
      placeholder="Last Name"
      className="h-11 w-full border-[#545454] bg-white text-black"
    />
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="phone" className="mb-1 block text-sm text-gray-700">
      Phone Number
    </label>
    <Input
      id="phone"
      type="text"
      placeholder="Your Phone Number"
      className="h-11 w-full border-[#545454] bg-white text-black"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="mb-1 block text-sm text-gray-700">
      Email Address
    </label>
    <Input
      id="email"
      type="email"
      placeholder="Your email address"
      className="h-11 w-full border-[#545454] bg-white text-black"
    />
  </div>

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
      <div className="w-full space-y-5 md:w-1/2">
        <h2 className="text-2xl font-bold">Contact Us</h2>

        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex-center aspect-square size-10 rounded-full bg-[#2196F3]">
              <MapPin className="size-5 text-white" />
            </div>

            <p>
              <strong>Address</strong> <br />
              3540 Toringdon Way, Suite 200 Charlotte, North Carolina 28277,
              United States
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-center aspect-square size-10 rounded-full bg-[#2196F3]">
              <PhoneCall className="size-5 text-white" />
            </div>
            <p>
              <strong>Phone Number</strong> <br />
              980-729-7442
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-center aspect-square size-10 rounded-full bg-[#2196F3]">
              <MailsIcon className="size-5 text-white" />
            </div>

            <p>
              <strong>Email</strong> <br />
              info@solarcellzusa.com
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-center aspect-square size-10 rounded-full bg-[#2196F3]">
              <Home className="size-5 text-white" />
            </div>

            <p>
              <strong>Showroom</strong> <br />
              10924 Granite St Suite 400 Charlotte NC 28273
            </p>
          </div>
        </div>
      </div>

     
    </ResponsiveContainer>
  );
}
