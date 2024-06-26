interface IBasicNotification {
  id: number;
  read?: boolean;
  created_at: string;
}

interface IDetailedNotification extends IBasicNotification {
  from: string;
  company: string;
  project: string;
}

interface IFeatureNotification extends IBasicNotification {
  type: "feature";
  content: string;
}

interface IRequestNotification extends IDetailedNotification {
  type: "request";
  request: string;
}

interface IStatusHoldNotification extends IDetailedNotification {
  type: "status";
}

type test = { id: 1 };
