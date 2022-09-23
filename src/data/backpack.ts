export class BACKPACK {
  static ck3Path =
    "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Crusader Kings III\\game\\common\\culture\\name_lists";
  static projPath = "E:\\A-少用\\十字軍之王3-徽章\\各種輔助程序\\命名儀\\doc";
  static regex = {
    male: /^\s*male_names = \{(\n|\r|.)*?\}/gm,
    female: /^\s*female_names = \{(\n|\r|.)*?\}/gm,
  };
}
