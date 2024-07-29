import Link from "next/link";

export default function Debounce() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className="w-full max-w-md mx-auto">
        <img
          style={{ width: '190px', marginBottom: '15px' }}
          src="https://ik.imagekit.io/debounce/wp-content/uploads/2020/11/valid-service.svg"
          alt="Debounce Service"
        />
        <h4 className="text-2xl font-bold mb-4">Test Your Email and See How it Works!</h4>
        <p className="mb-8">
          Type an email address and DeBounce tries to validate it.
          <br />
          We also retrieve a photo associated with the provided email address if possible.
        </p>
        <form
          action="#"
          className="form-box width-80"
          method="post"
          onSubmit="showHint()"
        >
          <input
            id="words"
            autoComplete="off"
            name="email"
            placeholder="john.doe@yahoo"
            type="email"
            className="form-control mb-4 p-2 border rounded"
            required
          />
          <button
            className="btn bg-blue-500 text-white p-2 rounded"
            type="submit"
          >
            Validate
          </button>
        </form>
        <div
          id="demo-result-box"
          className="mt-8 p-4 border rounded"
        >
          <img
            className="mb-4 rounded-full w-16 h-16 mx-auto"
            src="https://cdn.debounce.io/j3qPRRUBgdrRz9TyNyyZh2ilfAB-EztFQY_Y0g5w_hQIWMVUVrthdj9wafNrQyzByt018SDcJtw8B1hHh4A_bgpNrLKvwlG94NaTjG8nL9YhOO3fP0T8cpr_uEjWCaAC"
            alt="Result"
          />
          <p>The email address is <span className="text-blue-500">Safe to Send</span> because it's <span className="text-blue-500">Deliverable</span>.</p>
          <hr className="my-4 border-dashed" />
          <div className="text-left">
            <p><strong>DELIVERABLE</strong></p>
            <p>Free Email: true</p>
            <p>Role: false</p>
            <p>Syntax Error: false</p>
            <p>Spam-trap: false</p>
            <p>Disposable: false</p>
            <p>Accept-all: false</p>
          </div>
        </div>
        <p className="mt-8">
          Convinced? <a href="https://app.debounce.io/register" className="text-blue-500 underline">Register now</a>, get 100 free credits and the full detailed report.
        </p>
      </div>
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        Go back to Home
      </Link>
    </main>
  );
}
