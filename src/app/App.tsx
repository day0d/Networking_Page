import React, { useRef, useState, useEffect, useCallback } from "react";
import svgPaths from "@/imports/svg-k9xq9ew7zi";
import imgChatGptImageJan132026045514Pm1 from "@/assets/headshot.png";
import { FileText, Linkedin, Mail, ExternalLink, MessageSquare, MessageCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

function Container3() {
  return <div className="bg-gradient-to-b from-[#f9d71c] h-[21px] rounded-[26843500px] shrink-0 to-[#e64a8a] w-[3.5px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-[188.85px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#1a1a1a] text-[17.5px] top-[-1.8px] tracking-[-0.4375px]">Professional Introduction</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[22.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Heading1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[79.6px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#1a1a1a] text-[12.25px] top-[-1.2px] tracking-[0.1225px] w-[667px] whitespace-pre-wrap">{`I'm targeting research-forward Learning Experience Design roles where I can help product teams improve end user learning engagement through applied learning science and on-the-ground learning design research.`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fafafa] h-[137.2px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[28.8px] px-[28.8px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[180.95px] items-start relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Container4 />
    </div>
  );
}

// What I'm Seeking Section (First bullet only)
function Container7() {
  return <div className="bg-gradient-to-b from-[#6b9e7c] h-[21px] rounded-[26843500px] shrink-0 to-[#4a7c8a] w-[3.5px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-[132.9px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#1a1a1a] text-[17.5px] top-[-1.8px] tracking-[-0.4375px]">{`What I'm Seeking`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[22.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Heading2 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#6b9e7c] left-0 rounded-[26843500px] size-[5.25px] top-[7px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[19.9px] left-[15.75px] top-0 w-[282.4px]" data-name="Text">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#1a1a1a] text-[12.25px] top-[-1.2px] whitespace-nowrap">
        <p className="mb-0">{`Learning Experience Design roles with a design `}</p>
        <p>research emphasis and approach</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[41px] relative shrink-0 w-[308px]" data-name="Container">
      <Container10 />
      <Text1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[105px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[14px] items-start pb-[0.8px] pt-[21.8px] px-[21.8px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[21px] items-start relative row-[1] shrink-0" data-name="Section">
      <Container6 />
      <Container8 />
    </div>
  );
}

// Where I'm Seeking Section (Location bullets)
function Container53() {
  return <div className="bg-gradient-to-b from-[#6b9e7c] h-[21px] rounded-[26843500px] shrink-0 to-[#4a7c8a] w-[3.5px]" data-name="Container" />;
}

function Heading10() {
  return (
    <div className="h-[22.75px] relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#1a1a1a] text-[17.5px] top-[-1.8px] tracking-[-0.4375px] whitespace-nowrap">{`Where I'm Seeking`}</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[22.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Heading10 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#6b9e7c] left-0 rounded-[26843500px] size-[5.25px] top-[7px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[19.9px] left-[15.75px] top-0 w-[283.313px]" data-name="Text">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#1a1a1a] text-[12.25px] top-[-1.2px] whitespace-nowrap">
        <p className="mb-0">{`Targeting Design Consulting Firm (IDEO or Boutique `}</p>
        <p className="mb-0">{`Design Research firm like Dark Matter Labs) or `}</p>
        <p>Frontier AI Lab</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[59px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Text2 />
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#6b9e7c] left-0 rounded-[26843500px] size-[5.25px] top-[7px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="absolute h-[39.8px] left-[15.75px] top-0 w-[292.65px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] left-0 not-italic text-[#1a1a1a] text-[12.25px] top-[-1.2px] w-[282px] whitespace-pre-wrap">Prefer hybrid opportunities in San Diego, LA, Bay Area or Vancouver, open to fully remote</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[39.8px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Text3 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white h-[150px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[14px] items-start pb-[0.8px] pt-[21.8px] px-[21.8px] relative size-full">
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[21px] items-start relative row-[1] shrink-0" data-name="Section">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[28px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Section5 />
    </div>
  );
}

// How You Can Help Section with Action Buttons
function Container16() {
  return <div className="bg-gradient-to-b from-[#e64a8a] h-[21px] rounded-[26843500px] shrink-0 to-[#d45b5b] w-[3.5px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-[140.663px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#1a1a1a] text-[17.5px] top-[-1.8px] tracking-[-0.4375px]">How You Can Help</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[22.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gradient-to-b from-[#e64a8a] relative rounded-[26843500px] shrink-0 size-[21px] to-[#d45b5b]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white">1</p>
      </div>
    </div>
  );
}

function ActionButton1() {
  return (
    <a
      href="mailto:?body=Hi%20%5BName%5D,%0A%0AWould%20you%20be%20open%20to%20an%20introduction%20to%20my%20%5Bfriend%2Fcolleague%5D,%20Derrick%20Yoder%3F%20Derrick%20does%20thoughtful%20work%20at%20the%20intersection%20of%20learning%20experience%20design,%20design%20research,%20and%20strategy.%20I%20think%20the%20two%20of%20you%20would%20have%20a%20great%20conversation.%20He%27s%20exploring%20his%20next%20professional%20steps%20and%20would%20appreciate%20a%20brief%20call%20to%20get%20your%20perspective.%0A%0ALet%20me%20know%20if%20you%27re%20open%20and%20I%27ll%20connect%20you.&bcc=yoderderrick@gmail.com"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-b from-[#e64a8a] to-[#d45b5b] text-white rounded-md text-[10.5px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
      title="Opens your email client with a pre-filled introduction request"
    >
      <Mail className="w-3 h-3" />
      Request Intro
    </a>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative flex items-center gap-2" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex-1">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] not-italic text-[#1a1a1a] text-[12.25px]">Introductions and referrals to opportunities and their associated hiring managers at your company or network</p>
      </div>
      <ActionButton1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Text4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-gradient-to-b from-[#e64a8a] relative rounded-[26843500px] shrink-0 size-[21px] to-[#d45b5b]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white">2</p>
      </div>
    </div>
  );
}

function ActionButton2() {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfVPfdsMJu00_3EPytKIaV3nIdwLxHAz3RJwQJ7T7PoLgiupA/viewform?usp=publish-editor"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-b from-[#e64a8a] to-[#d45b5b] text-white rounded-md text-[10.5px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
      title="Provide feedback via Google Form"
    >
      <MessageSquare className="w-3 h-3" />
      Give Feedback
    </a>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative flex items-center gap-2" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex-1">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] not-italic text-[#1a1a1a] text-[12.25px]">Feedback on my experience and how it might fit emerging roles in your industry</p>
      </div>
      <ActionButton2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Text6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-gradient-to-b from-[#e64a8a] relative rounded-[26843500px] shrink-0 size-[21px] to-[#d45b5b]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[10.5px] text-white">3</p>
      </div>
    </div>
  );
}

function ActionButton3() {
  return (
    <a
      href="mailto:?bcc=yoderderrick@gmail.com"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-b from-[#e64a8a] to-[#d45b5b] text-white rounded-md text-[10.5px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
      title="Opens your email client"
    >
      <Mail className="w-3 h-3" />
      Request Recruiter Intro
    </a>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative flex items-center gap-2" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid flex-1">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.906px] not-italic text-[#1a1a1a] text-[12.25px]">Referrals to recruiters specializing in product leadership positions</p>
      </div>
      <ActionButton3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Text7 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white h-[200px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[14px] items-start pb-[0.8px] pt-[21.8px] px-[21.8px] relative size-full">
        <Container18 />
        <Container22 />
        <Container24 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Section">
      <Container15 />
      <Container17 />
    </div>
  );
}

// My Background & Contact Section (replaces Why I'm Uniquely Positioned)
function Container27() {
  return <div className="bg-gradient-to-b from-[#4a7c8a] h-[21px] rounded-[26843500px] shrink-0 to-[#3e4f7c] w-[3.5px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[22.75px] relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#1a1a1a] text-[17.5px] top-[-1.8px] tracking-[-0.4375px] whitespace-nowrap">{`My Background & Contact`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[22.75px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Heading4 />
    </div>
  );
}

function BackgroundAssets() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const highlights = [
    {
      title: "Learning Platform Redesign",
      description: "Led research-driven redesign of enterprise learning platform, increasing user engagement by 45% through applied learning science principles.",
      date: "2023 - 2024",
      icon: "🎯"
    },
    {
      title: "Design Research Framework",
      description: "Developed comprehensive design research methodology adopted across 3 product teams, integrating ethnographic methods with rapid prototyping.",
      date: "2022 - 2023",
      icon: "🔬"
    },
    {
      title: "Cross-Functional Team Leadership",
      description: "Built and led distributed team of designers and researchers across 4 time zones, delivering 8 major product features on time.",
      date: "2021 - 2022",
      icon: "👥"
    }
  ];

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [checkScrollButtons]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Left navigation button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:border-[#4a7c8a] transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-[#4a7c8a]" />
        </button>
      )}

      {/* Scrollable content */}
      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 pb-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] bg-white p-6 rounded-lg border border-gray-200 hover:border-[#4a7c8a] hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{highlight.icon}</span>
                  <span className="text-[10px] font-['Inter',sans-serif] text-[#888] bg-gray-100 px-2 py-1 rounded">
                    {highlight.date}
                  </span>
                </div>
                <div>
                  <h4 className="font-['Inter',sans-serif] font-semibold text-[15px] text-[#1a1a1a] mb-2">
                    {highlight.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] text-[12px] text-[#666] leading-[18px]">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right navigation button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:border-[#4a7c8a] transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-[#4a7c8a]" />
        </button>
      )}
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-b from-[#fafafa] relative rounded-[14px] shrink-0 to-[#f5f5f5] w-full py-8 px-8" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative">
        <BackgroundAssets />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="Section">
      <Container26 />
      <Container28 />
    </div>
  );
}

// Footer Section
function Heading9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[50%] not-italic text-[14px] text-center text-white top-[-1.2px]">{`Let's Connect`}</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] min-h-px min-w-px not-italic relative text-[12.25px] text-[rgba(255,255,255,0.8)] text-center whitespace-pre-wrap">Ready to discuss opportunities and collaboration</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[45.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa3ff970} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p5c184f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.5px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-white">derrick [dot] yoder [at] email [dot] com</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-[1] content-stretch flex gap-[10.5px] items-center relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container45 />
      <Text8 />
    </div>
  );
}


function Container46() {
  return (
    <a
      href="https://wa.link/5dbxs7"
      target="_blank"
      rel="noopener noreferrer"
      className="col-[2] content-stretch flex gap-[10.5px] items-center relative row-[1] self-stretch shrink-0 hover:opacity-80 transition-opacity"
      data-name="Container"
    >
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[26843500px] shrink-0 size-[28px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <MessageCircle className="size-[14px] text-white" />
        </div>
      </div>
      <div className="h-[17.5px] relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-white">WhatsApp</p>
        </div>
      </div>
    </a>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p17d70d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p73a5000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p34626280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[26843500px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[146.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[12.25px] text-white">linkedin.com/in/derrickyoder</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-[1] content-stretch flex gap-[10.5px] items-center relative row-[2] self-stretch shrink-0" data-name="Container">
      <Container49 />
      <Text10 />
    </div>
  );
}

function SchedulingButtons() {
  return (
    <div className="col-[2] content-stretch flex gap-[10.5px] items-center relative row-[2] self-stretch shrink-0" data-name="Container">
      <a
        href="https://calendar.app.google/dE6USMiCrZsq3zer9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(255,255,255,0.1)] text-white rounded-md text-[12.25px] font-['Inter:Regular',sans-serif] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
        title="Schedule a 30 minute meeting"
      >
        <Calendar className="w-3.5 h-3.5" />
        30m Meeting
      </a>
      <a
        href="https://calendly.com/derrickyoder/30m-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(255,255,255,0.1)] text-white rounded-md text-[12.25px] font-['Inter:Regular',sans-serif] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
        title="Schedule a 60 minute meeting"
      >
        <Calendar className="w-3.5 h-3.5" />
        60m Meeting
      </a>
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[77px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container46 />
      <Container48 />
      <SchedulingButtons />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-gradient-to-b from-[#3e4f7c] h-[199.5px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#1a1a1a] w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[21px] items-start pt-[28px] px-[28px] relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start px-[42px] w-full" data-name="Container">
      <Section />
      <Container5 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}


function MainHeader() {
  return (
    <div className="w-full pt-[28px] px-[42px] pb-[14px]" data-name="MainHeader">
      <h1 className="font-['Inter',sans-serif] font-semibold text-[28px] text-[#1a1a1a] tracking-[-0.5px] text-center">
        Career Support & Guidance Snapshot
      </h1>
    </div>
  );
}

function ProfileUnit() {
  return (
    <div className="flex items-center gap-[24px] px-[42px] py-[20px]" data-name="ProfileUnit">
      <div className="rounded-full size-[140px] shrink-0" data-name="ProfilePhoto">
        <img
          alt="Profile"
          className="object-cover pointer-events-none rounded-full size-full"
          src={imgChatGptImageJan132026045514Pm1}
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Inter',sans-serif] font-semibold leading-[36px] text-[#1a1a1a] text-[32px]">
          Derrick Yoder
        </p>
        <p className="font-['Inter',sans-serif] font-light italic leading-[24px] text-[#666] text-[18px]">
          Learning Experience Designer
        </p>
      </div>
    </div>
  );
}

function FooterThankYou() {
  return (
    <div className="w-full mt-[35px] pt-[21.8px] px-[42px] pb-[28px] border-t border-[rgba(0,0,0,0.05)]" data-name="FooterThankYou">
      <p className="font-['Inter',sans-serif] font-normal leading-[14px] text-[#666] text-[10.5px] text-center">
        Thank you for taking the time to review my career snapshot. I look forward to connecting!
      </p>
    </div>
  );
}

function CareerSnapshot() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CareerSnapshot">
      <MainHeader />
      <ProfileUnit />
      <Container1 />
      <FooterThankYou />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col items-start pt-[28px] px-[168px] relative size-full" data-name="App">
      <CareerSnapshot />
    </div>
  );
}