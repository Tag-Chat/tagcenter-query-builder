export enum LoadingStatus {
  Get = "get",
  Create = "create",
  Update = "update",
  Delete = "delete",
}

export type LoadingStatusStateType = {
  [LoadingStatus.Get]: boolean;
  [LoadingStatus.Create]: boolean;
  [LoadingStatus.Update]: boolean;
  [LoadingStatus.Delete]: boolean;
};
