"use client";

type Props = {
  title: string;
  placeholder: string;
};

export default function Search({ title, placeholder }: Props) {
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          {title}
        </button>
      </form>
    </>
  );
}
