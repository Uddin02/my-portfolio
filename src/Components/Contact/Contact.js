import React from 'react';
import contact_me from '../../assets/Get in touch.png';

const Contact = () => {
    return (
        <div id='contact' className='mt-10'>
            <h2 className="font-bold text-3xl text-secondary my-5">Get In <span className="border-b-4 border-secondary">Touch</span></h2>
            <div className="grid grid-cols-2 items-center  dark:text-gray-700">
                <div>
                    <img src={contact_me} alt="" className="p-6" />
                </div>
                <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label htmlFor="name" className="text-sm font-bold">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 input-bordered input-primary rounded dark:bg-gray-200" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                        <input id="subject" type="text" placeholder="" className="w-full p-3  input-bordered input-primary rounded dark:bg-gray-200" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-bold">Email</label>
                        <input id="email" type="email" className="w-full p-3 input-bordered input-primary rounded dark:bg-gray-200" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-bold">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 input-bordered input-primary rounded dark:bg-gray-200"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;