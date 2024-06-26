// import { useCallback, useEffect, useState } from "react";
// import { useNotificationsStore } from "../store/notifications_store";

// const DEFAULT_ERROR_MSG =
//   "Not able to fetch notifications, please try again later.";

// export const useFetchNotifications = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   const notifications = useNotificationsStore((state) => state.notifications);
//   const setNotifications = useNotificationsStore(
//     (state) => state.setNotifications
//   );

//   const refetchData = useCallback(async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response: Response = await fetch(
//         import.meta.env.VITE_BASE_NOTIFICATIONS_URL ||
//           "http://localhost:3333/notifications"
//       );

//       if (response.status !== 200) {
//         setError(DEFAULT_ERROR_MSG);
//         return;
//       } else {
//         const data: IBasicNotification[] = await response?.json();
//         setNotifications(data);
//       }
//     } catch (error: unknown) {
//       console.log(error);
//       setError(DEFAULT_ERROR_MSG);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [setNotifications]);

//   useEffect(() => {
//     if (notifications.length === 0) {
//       refetchData();
//     }
//   }, [notifications.length, refetchData]);

//   return { isLoading, error, refetchData };
// };
