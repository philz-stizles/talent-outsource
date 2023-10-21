import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageListener } from '../../../firebase';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
//   useEffect(() => {
//     requestForToken();
//     const unsubscribe = onMessageListener().then((payload: any) => {
//       setNotification({
//         title: payload?.notification?.title,
//         body: payload?.notification?.body,
//       });
//       toast.success(
//         `${payload?.notification?.title}: ${payload?.notification?.body}`,
//         {
//           duration: 60000,
//           position: 'top-right', // section of the browser page
//         }
//       );
//     });
//     return () => {
//       unsubscribe.catch((err) => console.log('failed: ', err));
//     };
//   }, []);
//   return (
//     <div>
//       <Toaster />
//     </div>
//   );

    useEffect(() => {
      function ToastDisplay() {
        return (
          <div>
            <p>
              <b>{notification?.title}</b>
            </p>
            <p>{notification?.body}</p>
          </div>
        );
      }
      const notify = () => toast(<ToastDisplay />);
      if (notification?.title) {
        notify();
      }
    }, [notification]);

    requestForToken();

    onMessageListener()
      .then((payload: any) => {
        setNotification({
          title: payload?.notification?.title,
          body: payload?.notification?.body,
        });
      })
      .catch((err) => console.log('failed: ', err));

    return <Toaster />;
};

export default Notification;
