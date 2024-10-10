import React from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".contactForm", {
      scrollTrigger: {
        trigger: ".contactpage",
        start: "-top-10%",
        scrub: true,
      },
      opacity: 0,
      x: 4000,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });
    gsap.from(".contactImage", {
      scrollTrigger: {
        trigger: ".contactImage",
        start: "top-80%",
        scrub: true,
      },
      opacity: 0,
      x: -4000,
      delay: 1,
      duration: 1,
      ease: "expo.inOut",
    });
  });
  const formSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(50),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div
        id="contact"
        className="w-full h-full py-10 my-4 shadow-lg contactpage"
      >
        <div className="max-w-[1280px] h-full gap-4 container mx-auto flex flex-col md:flex-row-reverse justify-between md:justify-evenly items-center px-5 md:px-0">
          <div className="contactForm md:max-w-[50%] flex flex-col p-10 gap-2 bg-white shadow-xl rounded-lg h-full">
            <h2 className=" text-2xl text-[#3919BA] font-medium">
              Love to hear from you
            </h2>
            <h2 className=" text-2xl text-[#3919BA] font-medium">
              Get in touch 👋
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    className="w-full"
                    name="Firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>FirstName</FormLabel>
                        <FormControl className="w-full">
                          <Input
                            placeholder="Firstname"
                            className="w-full focus:outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    className="w-full"
                    name="Lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LastName</FormLabel>
                        <FormControl className="w-full">
                          <Input
                            placeholder="Lastname"
                            className="w-full focus:outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="Email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className=" focus:outline-none"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="dealershipname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Dealership Name, Service Center, OEM Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Dealership Name, Service Center, OEM Name"
                            className=" focus:outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone No</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className=" focus:outline-none"
                            placeholder="Phone No"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Can you please provide more information on about
                          dealership modules or areas you want us to focus in
                          demo?
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            type="tel"
                            placeholder="Enter the Context"
                            className=" focus:outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#3919BA] w-full text-white hover:bg-[#3919BA]/80 shadow-md"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          <div className="contactImage max-w-[50%] hidden md:flex flex-col justify-center items-center">
            <img
              src="/public/assets/contactLogo2.png"
              alt="contact"
              className="hover:scale-105 transition-all duration-400 ease-in-out hover:rotate-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
