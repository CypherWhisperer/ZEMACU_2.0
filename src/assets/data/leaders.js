// Leaders Data

// Importing assets
import { 
        chairpersonBg, 
        chairpersonImage,
        viceChairBg,
        viceChairImage,
        bibleStudyBg,
        bibleStudyImage,
        discipleshipBg,
        discipleshipImage,
        missionsBg,
        missionsImage,
        praiseImage,
        praiseBg,
        prayerBg,
        prayerImage,
        developmentBg,
        developmentImage,
        usheringBg,
        usheringImage,
        secretaryBg,
        secretayImage,
        treasurerBg,
        treasurerImage,
        mediaBg,
        mediaImage,
    
        // Social Handles Logos 
        facebook_logo,
        instagram_logo,
        threads_logo,
        x_logo } from "../assets.js";

// Exporting the data as an array of objects
export default [
    {
        id: 1,
        rank: "CHAIR PERSON",
        name: "Meshack Abwolo",
        info: "Meshack leads the entire council and ensures all functions run smoothly and efficiently.",
        phone: "254748390059",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: chairpersonImage,
            alt: "Chairperson Main Image(DP)"
        },
        bgImage: {
            src: chairpersonBg,
            alt: "Chairperson Thumbnail image"
        }
    },
    {
        id: 2,
        rank: "VICE CHAIRPERSON",
        name: "Mercy Josephine",
        info: "Mercy assists the chairperson and steps in during their absence.",
        phone: "254716708152",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: viceChairImage,
            alt: " vice Chairperson Main Image(DP)"
        },
        bgImage: {
            src: viceChairBg,
            alt: "Vice Chairperson Thumbnail image"
        }
    },
    {
        id: 3,
        rank: "BIBLE STUDY COORDINATOR",
        name: "Christine Murugi",
        info: "Christine coordinates weekly Bible study sessions and fosters spiritual growth.",
        phone: "254790306571",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: bibleStudyImage,
            alt: "Bible Study Coordinator Main Image(DP)"
        },
        bgImage: {
            src: bibleStudyBg,
            alt: "Bible Study Coordinato Thumbnail image"
        }
    },
    {
        id: 4,
        rank: "DISCIPLESHIP COORDINATOR",
        name: "Ann Michael",
        info:  "Ann mentors new members and guides them in their walk of faith.",
        phone: "254748736006",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: discipleshipImage,
            alt: "Discipleship Coordinator Main Image(DP)"
        },
        bgImage: {
            src: discipleshipBg,
            alt: "Discipleship Coordinator Thumbnail image"
        }
    },
    {
        id: 5,
        rank: "PRAYER COORDINATOR",
        name: "Gideon Moikan",
        info: "Gideon leads intercessory prayers and organizes prayer meetings.",
        phone: "254112388656",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: prayerImage,
            alt: "Prayer Coordintor Main Image(DP)"
        },
        bgImage: {
            src: prayerBg,
            alt: "Prayer Coordinator Thumbnail image"
        }
    },
    {
        id: 6,
        rank: "PRAISE & WORSHIP CORDINATOR",
        name: "Margaret Kariuki",
        info: "Margaret oversees worship teams and plans praise and worship sessions.",
        phone: "254745208720",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: praiseImage,
            alt: "Praise & Worship Coordinator Main Image(DP)"
        },
        bgImage: {
            src: praiseBg,
            alt: "Praise & Worship Coordinator Thumbnail image"
        }
    },
    {
        id: 7,
        rank: "MISSIONS COORSINATOR",
        name: "Kevin Odhiambo",
        info: "Kevin organizes outreach and mission activities in and out of campus.",
        phone: "254758257432",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: missionsImage,
            alt: "Missions Coordinator Main Image(DP)"
        },
        bgImage: {
            src: missionsBg,
            alt: "Missions Coordinator Thumbnail image"
        }
    },
    {
        id: 8,
        rank: "DEVELOPMENT COORDINATOR",
        name: "Sirere Simanka",
        info: "Sirere leads fundraising and development of infrastructure.",
        phone: "254745261485",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: developmentImage,
            alt: "Development Coordinator Main Image(DP)"
        },
        bgImage: {
            src: developmentBg,
            alt: "Development Coordinator Thumbnail image"
        }
    },
    {
        id: 9,
        rank: "USHERING COORDINATOR",
        name: "Mirrium Cherotich",
        info: "Mirrium organizes ushering teams and hospitality during events.",
        phone: "254701569293",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: usheringImage,
            alt: "Ushering Coordinator Main Image(DP)"
        },
        bgImage: {
            src: usheringBg,
            alt: "Ushering Coordinator Thumbnail image"
        }
    },
    {
        id: 10,
        rank: "SECRETARY",
        name: "Justine Zijenga",
        info: "Justine maintains documentation, communication, and record-keeping across teams.",
        phone: "254743534987",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: secretayImage,
            alt: "Secretary Main Image(DP)"
        },
        bgImage: {
            src: secretaryBg,
            alt: "Secretary Thumbnail image"
        }
    },
    {
        id: 11,
        rank: "TREASURER",
        name: "Melick Nzomo",
        info: "Melick oversees finances, budgets, and all monetary reporting.",
        phone: "254796008573",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: treasurerImage,
            alt: "Treasurer Main Image(DP)"
        },
        bgImage: {
            src: treasurerBg,
            alt: "Treasurer Thumbnail image"
        }
    },
    {
        id: 12,
        rank: "MEDIA COORDINATOR",
        name: "Samuel Maina",
        info: "Samuel handles and delegates digital media, announcements, and social media presence.",
        phone: "254708816796",
        socialHandles: [
            { id: "facebook",  handleLogo: { src: facebook_logo,  alt: "facebook logo" },  handle: "https://facebook.com/thyhandle"},
            { id: "instagram", handleLogo: { src: instagram_logo, alt: "instagram logo" }, handle: "https://instagram.com/thyhandle"},
            { id: "threads",   handleLogo: { src: threads_logo,   alt: "threads logo" },   handle: "https://threads.com/thyhandle"},
            { id: "x",         handleLogo: { src: x_logo,         alt: "x logo" },         handle: "https://x.com/thyhandle"}
        ],
        mainImage: {
            src: mediaImage,
            alt: "Media Coordinator Main Image(DP)"
        },
        bgImage: {
            src: mediaBg,
            alt: "Media Coordinator Thumbnail image"
        }
    },
]