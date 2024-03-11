function Maps() {
  return (
    <div className="p-2">
      <iframe
        className="sm:p-6 w-full h-screen max-h-96"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.0755359219317!2d-75.28985611932768!3d2.929511881973496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b7463479a637b%3A0x895cc3711a3932ee!2sPlaza%20Real!5e0!3m2!1ses!2sco!4v1707182875541!5m2!1ses!2sco"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
