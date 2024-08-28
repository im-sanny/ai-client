import Title from "../components/Title";

const Generate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.prompt.value);
    const form = new FormData();
    form.append("prompt", e.target.prompt.value);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": VITE_AI_APIKEY,
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        console.log(buffer);
        // buffer here is a binary representation of the returned image
      });
  };
  return (
    <div className="container">
      <Title>Generate Paintings</Title>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap mt-10 justify-center gap-2"
      >
        <input
          type="text"
          name="prompt"
          placeholder="what kind of painting do you need"
          className="input input-bordered w-10/12 "
        />
        <button className="btn btn-primary ">Generate</button>
      </form>
    </div>
  );
};

export default Generate;
