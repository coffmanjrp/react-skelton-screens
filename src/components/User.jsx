import { useEffect, useState } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
  const [profile, setProfile] = useState(null);
  const randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${randomNum}`
      );
      const data = await res.json();

      setProfile(data);
    }, 5000);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="user">
        <h2>User Details</h2>
        {profile && (
          <div className="profile">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a
              href={`https://${profile.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.website}
            </a>
          </div>
        )}
        {!profile && <SkeletonProfile theme="light" />}
      </div>
    </>
  );
};

export default User;
