import React from 'react';
import {RoomType} from "../types/room";

type RoomListTypeProps = {
  rooms: RoomType[]
}

const RoomList = ({rooms}: RoomListTypeProps) => {
  const renderList = () => {
    return rooms.map((room: RoomType) => <li key={room.room_type}>
      {`${room.room_type}, ${room.vacant_rooms}, $${room.price}`}
    </li>)
  }

  return <ol>
    {renderList()}
  </ol>
}

export default RoomList;
