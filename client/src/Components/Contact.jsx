
import { useEffect, useState } from "react";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        if (data.success) {
          setLandlord(data);
        } else {
          // Handle the error (optional)
          console.error("Failed to fetch landlord data");
        }
      } catch (error) {
        console.error("Error fetching landlord:", error);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <a
            href={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
