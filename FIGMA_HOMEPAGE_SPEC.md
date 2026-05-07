# FixinMoto Homepage — Design specification from Figma

This document mirrors the **Homepage** frame in the FixinMoto community UI kit so implementation can match layout, typography, colors, and copy closely.

| Field | Value |
| ----- | ----- |
| **Figma file** | [FixinMoto — Automotive Service Figma Website UI Kit](https://www.figma.com/design/8hTRUKPo5snzx1Rk4X2Rs2/FixinMoto---Automotive-Service-Figma-Website-UI-Kit--Community-) |
| **Node** | `22:1203` (URL query `node-id=22-1203`) |
| **Frame name** | Homepage |
| **Artboard width** | **1440px** (`layout_A55Q2S`: column, horizontal fixed 1440, vertical hug) |
| **Font family** | **Inter** everywhere (via Google Fonts or self-hosted equivalent) |

> **Pixels vs responsive:** Dimensions below are desktop-first from Figma. For “pixel-perfect” at 1440px, honor fixed widths/heights where noted; adapt down with the same proportional hierarchy (type scale + spacing).

---

## 1. Global design tokens

### Colors (named styles used in this frame)

| Token | Hex / value | Typical usage |
| ----- | ----------- | ------------- |
| **Primary** | `#292929` | Dark panels (e.g. “Why Choose Us”, testimonials backdrop base, coverage section, footer, floating form background) |
| **Black** | `#202020` | Alternating dark sections (“Our Services”, “Service Process”, blog) |
| **Secondary** | `#DB323E` | Accent: primary buttons (filled), active process tab headline, badges, highlights |
| **Red** | `#DB323E` | Footer newsletter **Submit** button fill (matches Secondary numerically in file) |
| **White** | `#FFFFFF` | Text/icons on dark or red surfaces; strokes (`0.5px`–`1px`) |
| **Light Grey** | `#F8F8F6` | Testimonial card fill |
| **Subdue BG** | `#EDF2FD` | Blog card surface |
| **Gray Stroke** | `#EBEBEB` | Inputs in floating form (`1px`) |
| **Text** | `#575757` | Placeholder text in inputs |
| **Dark Grey** | `#292929` | Matches Primary (SVG subparts reference this label) |

**Opacity notes (preserve in CSS):**

- `0.5` — muted labels/descriptions/footer lines.
- `0.699999988079071` (~0.7) — secondary body on colored sections.
- `0.800000011920929` (~0.8) — subtitle on hero (“Your car deserves…”).
- Footer copyright / meta text uses `0.5` on White.

### Typography scale (Inter)

Copy **exact** `font-size`, `font-weight`, `line-height` (`em`-relative as in file).

| Style name | Weight | Size (px) | Line height |
| ---------- | ------ | --------- | ----------- |
| **Hero display** (`style_64FDT2`) | **600** | **97.0714** (implement as ~**97px** or `clamp`) | ~**1.1667em** |
| **Heading/H1/H1 Bold** | 700 | 64 | 1.125em; **CENTER** (“+15” stat number) |
| **Heading/H1/H1 Medium** | 500 | 64 | 1.125em; LEFT/TOP except where overridden |
| **Heading/H2/H2 Semi Bold** | 600 | 48 | ~1.167em |
| **Heading/H2/H2 Semi Bold (2:8)** | 600 | 48 | ~1.167em |
| **Heading/H2/H2 Medium** | 500 | 48 | ~1.167em |
| **Heading/H4/H4 Semibold** | 600 | 32 | **1.25em** |
| **Heading/H4/H4 Medium** | 500 | 32 | **1.25em** |
| **Heading/H5/H5 Medium** | 500 | 24 | ~1.333em |
| **Heading/H6/H6 Medium** | 500 | 18 | ~1.444em |
| **Heading/H6/H6 Regular** | 400 | 18 | ~1.444em |
| **Heading/H6/H6 Regular (2:26)** | 400 | 18 | ~1.444em; sometimes **CENTER** (stat sublabel / footer copyright) |
| **H4 - Header 4 - 24pt Inter Medium** | 500 | 24 | ~1.417em |
| **Body Text/Large/Body Large Semibold** | 600 | 16 | **1.5em** |
| **Body Text/Large/Body Large Medium** | 500 | 16 | **1.5em** |
| **Body Text/Large/Body large Regular** | 400 | 16 | **1.5em** |
| **Body Text/Large/Body large Regular (2:30)** | 400 | 16 | **1.5em** |
| **Body Text/Medium/Body Medium Medium** | 500 | 14 | ~1.429em |
| **Body Text/Medium/Body Medium Regular** | 400 | 14 | ~1.429em |
| **Body Text/Small/Body Small Medium** | 500 | 12 | ~1.333em |
| **Body Text/Small/Body Small Regular** | 400 | 12 | ~1.333em |

Most body text aligns **LEFT** / **TOP** unless a style specifies CENTER (stated above).

---

## 2. Shared UI patterns

### Primary button (Secondary fill)

- **Layout:** horizontal row; `justify-content: center`; `align-items: center`; `gap: 8px`; **`padding: 15px 32px`** (`layout_PP006O`).
- **Background:** Secondary `#DB323E`.
- **Text:** Body Medium Medium, **White**.
- **`border-radius: 8px`**.

Examples: hero “ Appointment Now”, “Login”, “Learn More”, “View all promotion”, “Check Avability”, etc.

### Outline / ghost button (hero secondary CTA)

- **Stroke:** `1px` **White**.
- **Fill:** transparent.
- **Text:** Body Medium Medium, **White**.
- **`border-radius: 8px`**.

Example: hero “Our Services”.

### Small icon sizing

- Many UI icons live in **`24 × 24`** frames (`layout_2O2Q9I`).

### Dropshadow (footer Submit)

- `effect_ABIVXS`: **`0px 4px 12px rgba(34, 34, 34, 0.1)`** on newsletter submit control.

---

## 3. Page structure (top → bottom)

Order follows the Homepage frame’s children in Figma.

### 3.1 Hero — `image` (node `12:297`)

**Container**

- Height: **705px** (`layout_5Z2ZDN`), full frame width (`fill`).
- **Background stacking (bottom → top):**
  1. Photo fill — **same image asset** as elsewhere (`imageRef` `d6912f7077efdd54b1273a77869ec042ea11f7b3`), **`scaleMode: FILL`**, cover.
  2. Linear gradient: **`linear-gradient(270deg, rgba(0,0,0,1) 4%, rgba(0,0,0,0) 92%)`** (`fill_8YG69M`).

**Navbar row** (`layout_T4B2JM`)

- **Position:** absolute-style inset from artboard **`x: 120`**, **`y: 52`**; content row width **1200px**; **`gap: 32px`**; centered alignment (`justify-between` semantics: outer row center, inner columns distribute).
- Left block: logo vector **`140 × 42`** (`layout_O0JH2A`); SVG fill **`#DB323E`** (`fill_XE80F4`) per spec instance.
- Center links row (`layout_70T7XQ`): **`gap: 32px`**; link text **White**, **Body Large Semibold**.
  - “About Us”, “Appointment”, “Pages” + chevron (**24×24**).
- Right: filled **Login** button (Secondary, 8px radius).

**Headline column** (`layout_H97NI3`)

- **Position:** **`x: 120`**, **`y: 112`**; **`width: 652`**, **`height: 481`**.
- Vertical stack **`gap: 16px`**; `justify-content: center`.
- **Heading** (TEXT “Drive Confidently with FixinMoto”):
  - Use **Hero display**: Inter **600**, **~97px**, LH **~1.167em**.
  - Max text box width ~**1132.5px** in file (allow wrapping within 652 column).
  - Fill **White**.
- **Actions** row (`layout_9LVUA1`): **`gap: 16px`**, **`padding-top: 16px`** (`16px 0 0`).
  - Primary: label text **'` Appointment Now`'** — **preserve leading space** as in Figma.
  - Secondary: “Our Services” outline button.

**Subcopy** (`layout_2V8SLZ`)

- **Position:** **`x: 890`**, **`y: 573`** (right column overlap).
- **Size:** **`468 × 78`** (when implemented, treat as anchored block on large screens).
- Text:  
  **`Your car deserves the best care, and we deliver it with precision, speed, and reliability. Book your appointment today!`**
- Style: **Heading/H6/H6 Regular**, **White**, **opacity ~0.8**.

---

### 3.2 Our Services — “Layout / 310 /” (node `35:71`)

**Section shell** (`layout_O7Y768`)

- Fill **Black** `#202020`.
- **Padding:** **`112px 64px`**.
- **`gap: 80px`** (vertical stacks).
- **`align-self: stretch`**, horizontal fill.

**Header** (`layout_O8MOC3`, width **1200**)

- Eyebrow: “Our Services” — Large Medium **White**, **opacity 0.5**.
- Title row (`layout_0KJ6LD`): space-between; left column:
  - H1 Medium **White**: “Comprehensive Automotive Solutions”.
  - Right column (**389px** wide text block): **H6 Regular**, **White 0.5**:  
    `From routine maintenance to advanced diagnostics, we’ve got all your automotive needs covered.`

**Service cards row** (`35:78` → `layout_3M124L` as horizontal row)

- **Row:** `gap: **16px**`, vertically centered (`align-items: center`).

Four cards (**287.78 × 455** each):

| # | Horizontal padding | Title |
| --- | ------------------ | ----- |
| 1 | **32px 28px** | Engine Repair & Maintenance |
| 2 | **32px 26px** | Oil & Filter Changes |
| 3 | **32px 26px** | Brake Services |
| 4 | **32px 26px** | Tire Care |

**Card internals**

- Outer **GROUP** **`287.78 × 455`**, corner radius **15px** on image rectangle.
- **Image:** rect **`287.78 × 455`**, **`border-radius: 15px`** (`layout_XZTQAV`).
  - Fill: gradient **`linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)`** over same photo `imageRef` `d6912f7077ef...`, **cover**.
- **Text column:**
  - Top: index “01”, “02”, … **Large Medium White** (narrow fixed widths per card in file—keep left aligned).
  - Icon frame **64×64** beside/below stack per variant (SVG nodes `41:*`).
  - Title: **Heading/H5/H5 Medium**, **White**.

---

### 3.3 Logo / brand strip — “Logo / 2 /” (node `15:73`)

**Section**

- **`layout_RNAMGG`**: **width 1440**, **`padding: 80px 64px`**, **`gap: 80px`**, **Black `#202020`**.

**Content row** (`layout_F5N676`)

- **`gap: 64px`**, `align-items: center`, stretch horizontally.

Elements:

1. Heading **Heading/H5/H5 Medium**, **White**:  
   **`Quality Car Repair You Can Count On !`** (preserve exclamation spacing as in design).
2. Large **IMAGE-SVG** content strip (`layout_KZ3HS8`): **fixed width ~1200**, horizontal row **`gap: 100px`** (partner logos/icons — vectors in Figma).

**Accent rectangles**

- **`fill_8Q9OOY`**: **`linear-gradient(270deg, rgba(34,34,34,0) 1%, rgba(34,34,34,1) 73%)`**.
- Absolutely positioned overlays (~**195×81**) — mirror x positions **821** & **377** relative to logo row bounds for pixel match.

---

### 3.4 Why Choose Us — “Layout / 470 /” (node `12:380`)

**Section** (`layout_U5IG4Q`)

- Fill **Primary** `#292929`.
- **`padding: 112px 64px`**, **`gap: 80px`** (column sections).

**Row** (`layout_HTA4F9`)

- **`gap: 32px`**, **`align-items: center`**.

**Left — content**

- Eyebrow: “Why Choose Us” — Large Medium **White**, **opacity 0.5**.
- Headline **H1 Medium White**: **`The FixinMoto Difference`**
- Sub: Body Medium Regular **White 0.5**:  
  `Discover why FixinMoto is the trusted choice for hundreds of car owners.`

**Bulleted rows** (`layout_6EZZCT` each):

- **`gap: 24px`**, **`align-self: stretch`**.
- Check icon **check_circle**, **24×24**.
- Text Body Medium Regular **White 0.5** — exact strings (keep line breaks `\r` as soft breaks if needed):

1. `Certified and experienced technicians.`  
2. `Transparent pricing with no hidden charges.\r`  
3. `Advanced tools and diagnostic equipment.\r`  
4. `Fast, reliable service you can trust.\r`

**Learn More**

- **`layout_EKYI8M`**: row, **`gap: 24px`**, **`padding-top: 16px`**.

**Right — collage** (`layout_D9PFYC`, **`height: 638`**)

- Main image **`619 × 638`**, **`border-radius: 15px`**, image ref `d691...`, cover; offset **`x: -18`** from collage origin.
- Smaller bordered thumb **`244 × 244`**, **`x: -152`**, **`y: 440`**, **`1px White` stroke**, **15px radius**, same image fill.
- Badge card (`layout_VHFFGM`): **Secondary** fill, **`border-radius: 15px`**, **`padding: 18px 24px`**, **`gap: 8px`**, position **`left ~418px`**, **`top: -42px`** relative to collage.
  - **`+15`** — **Heading/H1/H1 Bold**, **CENTER**, White.
  - “Years of Experience” — **H6 Regular (2:26)**, **CENTER**, White **opacity 0.5**.

---

### 3.5 Special Offers — `image` (node `14:280`)

**Section** (`layout_Y4XUYA`)

- Padding **`112px 64px`**, column **`gap: 32px`**, **`align-self: stretch`**.
- **Background:** **`rgba(0,0,0,0.5)`** layered over hero photo `d691...` (**cover**) (`fill_3FGR5R`).

**Content** (`layout_GOW2RS`)

- Centered column, stretch.

**Texts**

- “Special Offers for You” — **Heading/H2/H2 Semi Bold**, **CENTER**, White.
- “Save big on premium services…” — Body Large Regular, **CENTER**, White.

**Actions** (`layout_BYHD9I`)

- **Width 1200** (fixed frame), **`justify-content: center`**, **`gap: 24px`**, **`padding-top: 16px`**.
- Primary button: label **`View all promotion`** (sic — match Figma copy).

---

### 3.6 Service Process — “Layout / 28 /” (node `16:61`)

**Section**

- Same shell as §3.2 (**Black** `#202020`, **`padding: 112px 64px`**, **`gap: 80px`**).

**Header row** (`layout_5GIIDW`)

- **`gap: 168px`** (title block vs paragraph).
- Left column (**643px**): eyebrow **“Service Process\r”**, Large Medium **White 0.5** + **H1 Medium White**: **`What to Expect with FixinMoto`** (**16px gap** stack).
- Right: **Heading/H6/H6 Regular (2:26)**, White **opacity ~0.7**, width ~**342**, text:  
  `A smooth and transparent process for all your vehicle needs.`

**Component: Section Appointment — instance node `51:40`**, component **Property 1 = Step 1** (`componentId 51:11`)

**Outer row** (`layout_PY0TGG`): **fixed `1200` width**, **`gap: 32px`**, **`align-items: center`**.

**Tabs column** (`layout_ZA5UKV`)

- Vertical stack **`gap: 40px`**, **`align-self: stretch`**.

Each tab (`layout_A9MW55`):

- **Fixed height:** **130px** per row area.
- **Padding:** `0 0 0 **32px**` (left accent gutter).
- **Internal:** column **`justify-content: center`**, **`gap: 16px`**.

Tab content (preserve copy):

| State | Heading | Heading style | Stroke | Title color |
| ----- | ------- | ------------- | ------ | ----------- |
| **Active (tab 1)** | Book Your Appointment | H4 Semibold | **Left `2px` Secondary** (#DB323E) | **Secondary** |
| Inactive Tab 2 | Vehicle Check-In | H4 Semibold | none | **White** |
| Inactive Tab 3 | Approval & Repairs | **H4 Medium** (different weight variant) | none | White |
| Inactive Tab 4 | Drive Away Confidently | H4 Semibold | none | White |

Descriptions (all Large Medium, **White ~0.7**):

1. `Easily book your car repair appointment online. Choose your preferred time and get your vehicle back in top shape—fast and hassle-free`
2. `Quick and easy vehicle check-in. Drop off your car, and we'll take care of the rest—ensuring a smooth and efficient repair process.`
3. `Get fast approval for repairs. Once we assess your vehicle, we’ll confirm the work needed and get started right away to get you back on the road.`
4. `Drive away with confidence. After our expert repairs, your vehicle is ready to hit the road safely and smoothly.`

**Image** (`layout_U3AUU9`)

- **Fill width**, **fixed height `640px`**, **`border-radius: 15px`**, image `fill_424AC8` (photo `d691...`, cover).

---

### 3.7 Testimonials (node `35:110`)

**Section** (`layout_3RLRLQ`)

- Fill **Primary** `#292929`.
- **Padding:** `**80px 64px 32px**`.
- **`gap: 655px`** between major vertical stacks (large intentional gap before cards — recreate with spacer/min-height logic).

**Top text cluster** (`layout_0WWC48`)

- **`gap: 28px`**.
- Eyebrow “Testimonials” — **Heading/H6/H6 Medium**, White **opacity 0.5**.

**Heading row inside** (`layout_HTA4F9` again)

- **Title block width ~836:** “What Drivers Are Saying About Fixinmoto” — **Heading/H1/H1 Medium**, White (`layout_9ODX6D`).
- Sub: Body Large Regular (variant 2:30), White **opacity ~0.7**:  
  `Read what our satisfied customers have to say about our products and services`.

**Decoration**

- **Rectangle** **`1324 × 783`**, **Secondary `#DB323E`**, **`border-radius: 24px 0 0 0`**, **`position: absolute`** at **`x: 116`**, **`y: 316`** (`layout_W53LBK`).
- **Arrow SVG** row (`layout_767LY5`): flex-end **`gap: 19px`** (carousel controls).

**Cards strip** (`layout_SQIBUR`)

- **Absolute** `x: 199`, **`y: 374`**, **width ~1241** (overlay layout).
- Inner row **`layout_COQZWP`**: **`gap: 20px`**, centered vertical alignment.

Each testimonial **`layout_C6W9Y3`**

- **493 × 528**, fill **Light Grey `#F8F8F6`**, **`border-radius: 15px`**, **`padding: 67px 46px`**, **`gap: 10px`** (vertical).

Inner **GROUP** (**398 × 393** layout box) approximate structure:

| Card | Avatar | Author | Quote (Large Medium Black **opacity 0.5**) |
| ---- | ------ | ------ | ------------------------------------------ |
| 1 | **`116 × 116`**, radius **6px**, image `424AC8` | Albert Flores | `For years, I've trusted my car to FixinMoto, ...` |
| 2 | same | Robert Fox | `When I faced a sudden issue ...` |
| 3 | same | Eleanor Pena | `I encountered an urgent problem... FixinMotopair` (**keep exact spelling from Figma**) |

- Name lines: **Heading/H5/H5 Medium**, fill **Primary** `#292929`.
- Decorative quote vector (**96 × 16** area) anchored near bottom (`layout_6EMEIP`).

---

### 3.8 Blog — “Blog / 42 /” (node `22:801`)

**Section** (`layout_ZBAF96`)

- **Black `#202020`**, **`padding: 80px 64px`**, **`gap: 80px`** (between title block and grid).

**Title area** (`layout_CI3T5G` / `layout_5N7JTE`)

- Inline row with **`gap: 110px`**: eyebrow “Blog”, H6 Medium White **opacity 0.5** beside large title block (**739 max width**) + description.
- Heading: **`Rev Up Your Ride: The Latest in Automotive News and Insights`** — **Heading/H2/H2 Medium**, White.
- Paragraph: Large Regular variant, White **opacity ~0.7**:  
  `Stay ahead of the curve with expert analysis, in-depth reviews, and the latest trends in the automotive world.`

**Three cards row** (`layout_L3XKUT`): **`gap: 32px`**, stretch.

Per card (**`layout_NF120H`**)

- Background **Subdue BG `#EDF2FD`**.
- **`border-radius: 17px`**.
- **`padding` bottom **`18px`**, **`0` sides/top** (`0 0 18px`).
- **`gap` (internal column)** **`24px`**.

Structure:

1. **Image**: **fill width**, **`300px`** tall (`layout_MVZLFZ`), **top corners `8px 8px 0 0`**, rounded; image `424AC8`/photo `d691...`.
2. **Content wrapper** (`layout_EFRVG5`): **`gap: 16px`**, **`padding L/R 14px`**.
3. Meta row (**`layout_3M124L`**, gap **16**, center):  
   - Tag pill: **`padding 4px 8px`**, **Secondary**, **`border-radius 8px`**, text “Category” Body Small Medium **White**.  
   - “5 min read” Small Medium **Black ~0.8**.
4. Headline (**H6 Medium Black**):

| Card | Title |
| ---- | ----- |
| 1 | Revving Up: The Future of Automotive Innovation |
| 2 | Driving Change: Trends Shaping the Automotive Industry |
| 3 | Under the Hood: Exploring the Latest in Automotive  *(trailing space in Figma title)* |

5. Footer meta row (**opacity 0.5** wrapper `layout_FSCOKG`, **`justify-content` center-ish with `gap: 48`**):
   - Row A (`layout_1VHHJK`): **`padding-left: 14px`**, **`gap: 8`**, **`schedule`** icon **16×16**, text **December 29, 2024** / **December 12, 2024** / **December 7, 2024** — Body Small Regular, Black.
   - Row B (`layout_6N1UTR`): **`padding-right: 14px`**, **`account_circle`**, “Alex Johnson”.

---

### 3.9 Coverage Area — “Contact / 10 /” (node `22:610`)

**Section** (`layout_BJLYRU`)

- Primary fill `#292929`, **`padding-top: 80`** (`80px 0 0`).
- **`gap: 48px`** (internal column gap per `layout_BJLYRU`).

**Titles** (`layout_31SKHE`, **`gap: 16`**)

- Eyebrow: “Coverage Area\r” — H6 Medium **White 0.5**.
- Heading block (**764px span**): **Heading/H2/H2 Medium** White —  
  `FixinMoto Near You Quality, Convenience, and Expertise` *(no comma after “You” — match spacing).*
- Sub: Large Regular variant, White **opacity ~0.7**:  
  `Whether you’re near or far, our expert services are just around the corner.`

**Map/image** (`layout_K1K7IE`, **`gap: 80px`**)

- Placeholder image **`layout_82UV5X`** — **`height: 541`**, **`fill`** width; **`fill_H6TYEP`** = image `9b80da9ffd4db9bb19854f4c1cbd37f59eb858d2` **with crop** (`needsCropping: true` in export metadata — use cropped export or CSS `object-position` tuned to match crop matrix from Figma export tool if extracting assets programmatically).

---

### 3.10 CTA band — `image` (node `22:872`)

**Container** (`layout_5YESSW`)

- **Height `428px`**, horizontal fill, **`padding: 112px 64px`**, **`gap: 32px`**.

**Background** (`fill_CM9MSB`)

- Layered: linear gradient **`180deg`** from **`rgba(0,0,0,0)` → `rgba(41,41,41,1)` at **99%** over same photo **`d691...`** (cover).

**Content** (`layout_7PNRSM`)

- Centered **`hug`×`hug` column stack.

Texts:

1. Heading **521px max width**, **Heading/H2/H2 Semi Bold (2:8)**, White —  
   `Let’s Get Your Vehicle in Top Shape!`
2. Sub **743px max**, **Body Large Medium**, White **opacity ~0.7** (preserve line breaks):

```
Ready to give your car the care it deserves?
Contact FixinMoto for a free consultation or to book a service appointment today
```

---

### 3.11 Footer — “Footer / 2 /” (node `22:1127`)

**Section** (`layout_ZFW58X`)

- Fill **Primary** `#292929`, **`padding: 80px 64px`**, **`gap: 80px`**.
- Inner max content **1200** (`layout_TOKOXE`, **`gap: 54`** major sections).

**Main grid** (`layout_0KJ6LD`): space-between row.

Clusters (left):

1. **Logo + contacts** (`layout_IC42WY`, **`gap: 16`**) — red logo vector **`140 × 42`**, `#DB323E` fill (`fill_XE80F4`).
2. Address/phone/email/website (**345×144** approximate group positioning with icon offsets):

| Line | Style | Opacity |
| ---- | ----- | ------- |
| 2464 Royal Ln. Mesa, New Jersey 45463 | Large Regular variant | White 0.5 |
| (480) 555-0103 | same | White 0.5 |
| hello@FixinMoto.com | same | White 0.5 |
| www.FixinMoto.com | same | White 0.5 |

- Small **SVG markers** tinted **Red** (`#DB323E`) beside address/phones as in file.

**Opening Hours** (`layout_LTH04H`, **`gap: 21px`**):

- Heading “Opening Hours” — **Inter 500 / 24 / ~1.417em**, White (`H4 - Header...`).
- `Mon-Fri : 08.00 - 20.00`, `Sat-Sun: 10.00 - 16.00` — **H6 Regular**, White **0.5**.

**Quick Links** (`layout_VQVIGV`): width **164**, **`gap: 31px`** between title and text block:

- Heading same H4 style.
- Multiline Large Regular (**White 0.5**):

```
About Us
Why with Us
Our Services
Appointment
Blog
FAQ
```

**Newsletter** (`layout_VTVJ6Q`, **`gap: 25px`**):

- “Subscribe…” — **H4** styles, White.
- Body **Heading/H6 Regular**, White **0.5**:  
  `Sign up for our newsletter to receive exclusive promotions, news, and tips straight to your inbox.`
- Email field (**`layout_Z4K0IB`**): **`0.5px White` stroke**, **radius 8**, **`opacity: 0.5`**, padding **10**. Placeholder “Email Address” — **Heading/H6/H6 Regular**, White.
- **Submit** (**`layout_915Z4K`**): **Red `#DB323E`** fill (**same as Secondary**), **radius 8**, shadow `effect_ABIVXS`, **`padding 15px 32px`** (with internal icon vector **~18.65**).

**Divider + copyright** (`layout_V0VR61`): **`gap: 32`**:

- Horizontal line (**1520 × 0** stroke line), **White 0.5px**.
- Text: **`Copyright © 2024 FixinMoto. All rights reserved.`** — **Heading/H6/H6 Regular (2:26)** or equivalent, White **opacity 0.5**.

---

### 3.12 Floating availability form — “Content” (node `22:613`)

**Positioning**

- **`position: absolute`** on Homepage: **`layout_IX3I0K`**: **`x: 120`**, **`y: 6530`**, **`width: 393`**, **`background: Primary`**, **`border-radius: 15px`**.
- Stacks (`layout_090SKU`) use **`justify-content: flex-end`**, **`padding: 24`**, **`gap: 24`**.

**Fields** (three inputs + button)

Each **`layout_FQ1H2K`** input row:

- **White** fill input, **`1px`** **Gray Stroke** `#EBEBEB`, **`radius: 8`**, **`padding: 12`**, **`gap: 8`**, **`align-self: stretch`**.

Labels are placeholders (**Body Large Regular variant**, **Text** `#575757`, **opacity ~0.51**):

1. **`Enter Your Location`** + **distance / location** SVG **24×24**.
2. **`Date`** + **calendar_month**.
3. **`Select Your Area`** + **arrow_drop_down** right.

Primary action:

- **Secondary** filled button (**15×32 px padding** semantics), **`Check Avability`** — match Figma spelling.

---

### 3.13 Decorative foreground — “Group 1” (node `51:103`)

- **IMAGE-SVG** **`775.38 × 344.38`**, **`position: absolute`** at **`x: 621`**, **`y: 6494`** (`layout_VWBWW2`) — map markers / illustrative overlay; replicate as PNG/SVG export from node `51:103`.

---

## 4. Image assets (`imageRef` summary)

Reuse these refs when exporting from Figma API or MCP `download_figma_images`:

| `imageRef` | Usage |
| ---------- | ----- |
| `d6912f7077efdd54b1273a77869ec042ea11f7b3` | Primary hero/car photography — hero, overlays, collage, thumbnails, testimonials avatars placeholders, tabs image, gradient masks |
| `9b80da9ffd4db9bb19854f4c1cbd37f59eb858d2` | Map / coverage (**cropped asset** metadata `filenameSuffix` `50e7b9` in export tools) |

All vector icons (Material-style: `distance`, `calendar_month`, chevrons, check_circle, arrows, logos) should be exported as **SVG** from their respective node IDs while matching **24×24** or **`16×16`** frames indicated above.

---

## 5. Implementation checklist for visual parity at 1440px

1. Load **Inter** with weights **400 / 500 / 600 / 700** for the styles above.
2. Enforce **`max-width: 1440px`** centered root (or fixed-width staging) matching artboard width.
3. Use **exact hex** fills and **explicit opacities** from §1 instead of estimating grays.
4. Recreate **layered backgrounds** as separate layers (solid/gradient overlays + `background-image`) in §3.1, §3.5, §3.10 with the same angles and stops.
5. Honor **radii**: **8**, **15**, **17**, **24** px per component as specified.
6. Match **spacing tokens** from layouts: **`64`** section horizontal inset, **`80` / `112`** vertical paddings where listed, **`32`** gutters between major splits, **`16`** / **`24`** / **`gap: 655`** testimonial scaffold.
7. Preserve **literal copy** — including punctuation, spaces (` Appointment Now`), **“FixinMotopair”**, **“Check Avability”**, **`View all promotion`**, **`Why with Us`**, **`Fixinmoto`** vs **`FixinMoto`** as written per section above.
8. Export **floating form** plus **partner strip** SVGs/markers (`Group 1`, navbar logo, carousel arrows, service icons).

---

## 6. Responsive note

Below **1440px**, switch from fixed absolute placements (hero subcopy at `890,573`, testimonials/overlays at fixed `y`) to stacked flex layouts **while preserving** typography scale ratios and rounded corners for brand consistency.

---

*Derived from structured Figma inspection of node **`22:1203`** (“Homepage”) in file key **`8hTRUKPo5snzx1Rk4X2Rs2`*. For interactive states (hover/active) refer to sibling components within the same Figma file.*
