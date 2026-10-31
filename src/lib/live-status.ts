// Logika status buka/tutup realtime (WIB dari perangkat pengunjung).
// Dipakai bersama oleh TopInfoBar dan Hero.
import { SITE } from "../data/site";

export interface StatusInfo {
  servisBuka: boolean;
  cuciBuka: boolean;
  jam: string; // "06.23"
}

const DAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function getStatus(): StatusInfo {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    weekday: "short",
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(new Date()).map((p) => [p.type, p.value])
  );
  const day = DAY_MAP[parts.weekday] ?? new Date().getDay();
  const hour = parseInt(parts.hour, 10) % 24;
  const minutes = hour * 60 + parseInt(parts.minute, 10);
  const { open, close } = SITE.schedule;
  const dalamJam = minutes >= open && minutes < close;

  return {
    servisBuka: SITE.schedule.servis.hari.includes(day) && dalamJam,
    cuciBuka: SITE.schedule.cuci.hari.includes(day) && dalamJam,
    jam: `${String(hour).padStart(2, "0")}.${parts.minute}`,
  };
}

export function statusText(s: StatusInfo): string {
  if (s.cuciBuka && s.servisBuka) {
    return `Buka sekarang sampai ${SITE.hours.close} · ${s.jam} WIB`;
  }
  if (s.cuciBuka && !s.servisBuka) {
    return `Cuci buka sampai ${SITE.hours.close} · servis buka Senin · ${s.jam} WIB`;
  }
  return `Tutup sekarang · buka ${SITE.hours.open} WIB · ${s.jam} WIB`;
}
