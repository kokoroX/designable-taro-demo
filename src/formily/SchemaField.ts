import { createSchemaField } from "@formily/react";
import { Captcha } from "@/components/Captcha"
import { ArrayItems } from "@kokoro/pass-formily-vant/ArrayItems/index.tsx"
import { ArrayTabs } from "@kokoro/pass-formily-vant/ArrayTabs/index.tsx"
import { DatetimePicker } from "@kokoro/pass-formily-vant/DatetimePicker/index.tsx"
import { FormItem } from "@kokoro/pass-formily-vant/FormItem/index.tsx"
import { Input } from "@kokoro/pass-formily-vant/Input/index.tsx"
import { Picker } from "@kokoro/pass-formily-vant/Picker/index.tsx"
import { Radio } from "@kokoro/pass-formily-vant/Radio/index.ts"
import { Tabs } from "@kokoro/pass-formily-vant/Tabs/index.tsx"
import { Uploader } from "@kokoro/pass-formily-vant/Uploader/index.tsx"
import { Button, CellGroup, Icon, NoticeBar, Result } from "@antmjs/vantui"
import { Image, Text, View } from "@tarojs/components"
import { Cell } from "@kokoro/pass-formily-vant/Cell/index.tsx";

export const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Picker,
    Radio,
    Uploader,
    Captcha,
    DatetimePicker,
    View,
    Image,
    Button,
    Text,
    NoticeBar,
    Tabs,
    CellGroup,
    Cell,
    Result,
    Icon,
    ArrayItems,
    ArrayTabs,
  },
})
