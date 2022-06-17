export function getStatusColor(status: string) {
  switch (status) {
    case "confirmado":
      return "#13D761";
      break;
    case "analise":
      return "#EAD838";
      break;
    case "cancelado":
      return "#D71F13";
      break;
    default:
      return "#EAD838";
      break;
  }
}
