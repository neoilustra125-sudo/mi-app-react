import { useParams } from "react-router-dom";
import Profile from "../components/Profile.jsx";
import { items } from "./data.js";

function ProfilePage() {
  const { id } = useParams();

  const item = items.find(i => i.id === parseInt(id));

  return <Profile data={item} items={items} />;
}

export default ProfilePage;