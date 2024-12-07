import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

interface IFormInput {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // EmailJS service non active for the moment
        emailjs
            .send('service_id', 'template_id', { data }, 'user_id')
            .then((response) => {
                console.log('Success!', response.status, response.text)
            })
            .catch((err) => {
                console.error('Failed...', err)
            })
    }

    return (
        <div className="w-[900px] h-[800px] flex justify-center items-center  bg-transparent">
            <motion.form
                className="w-full max-w-lg p-8 bg-blue-950 shadow-lg rounded-2xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-3xl font-bold font-title text-center text-neutral-100 mb-6">
                    Contact Me
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-100"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-100"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-lg font-medium text-gray-100"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register('message', {
                            required: 'Message is required',
                        })}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </div>
    )
}

export default ContactForm
