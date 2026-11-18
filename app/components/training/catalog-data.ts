import { aruba_data } from "../../training-class/aruba-class/kelas_data_aruba";
import { cisco_data } from "../../training-class/cisco-class/kelas_data_cisco";
import { comptia_data } from "../../training-class/comptia-class/kelas_data_comptia";
import { h3c_data } from "../../training-class/h3c-class/kelas_data_h3c";
import { huawei_data } from "../../training-class/huawei-class/kelas_data_huawei";
import { juniper_data } from "../../training-class/juniper-class/kelas_data_juniper";
import { Mikrotik_data } from "../../training-class/mikrotik-class/kelas_data_mikrotik";
import { Ruckus_data } from "../../training-class/ruckus-class/kelas_data_ruckus";
import { ruijie_data } from "../../training-class/ruijie-class/kelas_data_ruijie";

// Keep the existing datasets, including their React images, on the server.
export const trainingVendors = [
  { slug: "cisco", name: "Cisco", courses: cisco_data },
  { slug: "mikrotik", name: "Mikrotik", courses: Mikrotik_data },
  { slug: "juniper", name: "Juniper", courses: juniper_data },
  { slug: "huawei", name: "Huawei", courses: huawei_data },
  { slug: "h3c", name: "H3C", courses: h3c_data },
  { slug: "aruba", name: "Aruba", courses: aruba_data },
  { slug: "ruijie", name: "Ruijie", courses: ruijie_data },
  { slug: "ruckus", name: "Ruckus", courses: Ruckus_data },
  { slug: "comptia", name: "Comptia", courses: comptia_data },
];

export type TrainingVendor = (typeof trainingVendors)[number];
export type TrainingCourse = TrainingVendor["courses"][number];
export type CatalogSearchParams = Record<string, string | string[] | undefined>;

export function vendorPath(slug: string) {
  return `/training-class/${slug}-class`;
}

// Normalize comparison only; never rewrite the displayed course level.
export function levelKey(level: string) {
  const value = level.trim().toLowerCase();
  return value === "advance" ? "advanced" : value;
}
