import { DeviceGroup } from "../types/meta";

export const getDeviceGroup = () => {
  if (typeof window === "undefined") {
    // TODO could we get it from CH
    return "server";
  }

  // Use User-Agent Client Hints if available
  if (navigator.userAgentData) {
    const isMobile = navigator.userAgentData.mobile;

    return isMobile ? DeviceGroup.mobile : DeviceGroup.desktop;
  }

  if (navigator.userAgent) {
    const ua = navigator.userAgent;
    if (
      /android/i.test(ua) ||
      /iPhone|iPad|iPod/i.test(ua) ||
      /Mobi|Android/i.test(ua)
    )
      return DeviceGroup.mobile;
  }

  return DeviceGroup.desktop;
};
