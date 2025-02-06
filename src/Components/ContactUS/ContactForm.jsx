import { useForm } from "react-hook-form"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example")) // watch input value by passing the name of it
  return (
    <div className="w-8/12">
    <form className="flex flex-col gap-5 " onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="py-3 px-5 border bg-white rounded focus:outline-primary" {...register("name")} placeholder="Full name" />
      <input className="py-3 px-5 border bg-white rounded focus:outline-primary" {...register("email")} placeholder="Email" />
      <input className="py-3 px-5 border bg-white rounded focus:outline-primary" {...register("phone")} placeholder="Phone" />
      <textarea className="py-3 px-5 border bg-white rounded focus:outline-primary" {...register("message")} placeholder="Message" />

      <input className="px-5 py-2 bg-primary text-white font-semibold w-fit rounded mx-auto" type="submit" />
    </form>
    </div>
  )
}

export default ContactForm
