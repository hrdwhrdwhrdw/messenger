import React from "react";
import "./Users.scss";

export const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        firstName: "Dmitry",
        lastName: "Combarov",
        image:
          "https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1",
        followed: true,
        location: { country: "Russia", city: "Moscow" },
      },
      {
        id: 2,
        firstName: "Dmitry",
        lastName: "Combarov",
        image:
          "https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1",
        followed: true,
        location: { country: "Russia", city: "Moscow" },
      },
      {
        id: 3,
        firstName: "Dmitry",
        lastName: "Combarov",
        image:
          "https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1",
        followed: true,
        location: { country: "Russia", city: "Moscow" },
      },
      {
        id: 4,
        firstName: "Dmitry",
        lastName: "Combarov",
        image:
        "https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1",
        followed: true,
        location: { country: "Russia", city: "Moscow" },
      },
      {
        id: 5,
        firstName: "Dmitry",
        lastName: "Combarov",
        image:
          "https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1",
        followed: false,
        location: { country: "Russia", city: "Moscow" },
      },
    ]);
  }
  return (
    <div className="users__list">
      {props.users.map((user) => {
        return (
          <div key={user.id} className="user__item">
            <div>
              <img src={user.image} alt="" className="user__image" />
            </div>
            <div className="user__info">
              <div className="user__firstname"><span>Name:</span>{user.firstName}</div>
              <div className="user__lastname"><span>Surname:</span>{user.lastName}</div>
              <div className="user__country"><span>Country:</span>{user.location.country}</div>
              <div className="user__city"><span>City:</span>{user.location.city}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
