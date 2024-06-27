import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";

const DEFAULT_ERROR_MSG =
  "Not able to fetch notifications, please try again later.";

type NotificationsStore = {
  notifications: (
    | IFeatureNotification
    | IRequestNotification
    | IStatusHoldNotification
  )[];
  getSingleNotification: (
    id: number
  ) =>
    | IFeatureNotification
    | IRequestNotification
    | IStatusHoldNotification
    | undefined;
  notificationsCount: number;
  unreadNotificationsCount: number;
  markNotificationAsRead: (id: number) => void;
  markAllNotificationsAsRead: () => void;
  fetchNotifications: () => Promise<void>;
  loading: boolean;
  errorMsg: string;
};

export const useNotificationsStore = create<NotificationsStore>()(
  persist(
    (set, get) => ({
      notifications: [],
      getSingleNotification: (id: number) => {
        return get().notifications.find(
          (notification) => Number(notification.id) === id
        );
      },
      notificationsCount: 0,
      unreadNotificationsCount: 0,
      fetchNotifications: async () => {
        try {
          const response = await fetch(
            import.meta.env.VITE_BASIC_NOTIFICATIONS_URL ||
              "http://localhost:3333/notifications"
          );

          if (!response.ok) {
            produce((state: NotificationsStore) => {
              state.errorMsg = DEFAULT_ERROR_MSG;
              state.loading = false;
            });
          } else {
            const fetchedNotifications: (
              | IFeatureNotification
              | IRequestNotification
              | IStatusHoldNotification
            )[] = await response.json();

            set(
              produce((state: NotificationsStore) => {
                state.notifications = fetchedNotifications;
                state.loading = false;
                state.notificationsCount = fetchedNotifications.length;
                state.unreadNotificationsCount = fetchedNotifications.length;
              })
            );
          }
        } catch (error) {
          console.log(error);
          produce((state: NotificationsStore) => {
            state.errorMsg = DEFAULT_ERROR_MSG;
            state.loading = false;
          });
        }
      },

      markNotificationAsRead: (id) =>
        set(
          produce((state: NotificationsStore) => {
            state.notifications.find(
              (notification) => notification.id === id
            )!.read = true;
            state.unreadNotificationsCount--;
          })
        ),
      markAllNotificationsAsRead: () =>
        set(
          produce((state: NotificationsStore) => {
            state.notifications.map(
              (notification) => (notification.read = true)
            );
            state.unreadNotificationsCount = 0;
          })
        ),
      loading: false,
      errorMsg: "",
    }),
    {
      name:
        import.meta.env.VITE_LOCAL_STORAGE_STORE_NAME || "notifications_app",
    }
  )
);
