import { useState } from "react";
import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    //static object data.
    first: "Ehsaan ",
    last: "Shah",
    avatar: "https://avatars.githubusercontent.com/u/124622398?v=4",
    twitter: "EhsaanShah333",
    notes: "Backend SWE",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar ||
            `https://robohash.org/${contact.id}.png?size=200x200`
          }
        />
      </div>

      {/* Displaying name and other info */}
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first}
              {contact.last}
            </>
          ) : (
            <i>No name </i>
          )}{" "}
          <Favorite contact={contact} />
          {/* rendering the favorite component. */}
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}
        {/* conditional rendering above.*/}

        {/* //for edit and delete */}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("please confirm you want to delete this record.")) {
                event.preventDefault();
                // without refresing the page form is submitted
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const favorite = contact.favorite;

  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "⭐" : "✨"}
      </button>
    </Form>
  );
}
