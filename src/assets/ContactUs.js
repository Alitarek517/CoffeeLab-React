function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
    };

    return (
        <div className="h-[600px]">
            <h1 className="p-[2%] text-5xl font-bold">Contact Us</h1>
            <form 
                onSubmit={handleSubmit}
                className="p-[2%] rounded-lg shadow-lg space-y-4 "
            >   
                <input
                    type="text"
                    placeholder="Name"
                    className="w-[40%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-[40%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />

                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-[40%] border-2 border-gray-300 p-2 block rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />

                <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-[40%] border-2 border-gray-300 p-2 rounded-md block focus:outline-none focus:ring-2 focus:ring-gray-200"
                ></textarea>

                <button
                    type="submit"
                    className="w-[10%] bg-coffee-footer bg-opacity-90 text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-100  transition-colors "
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
