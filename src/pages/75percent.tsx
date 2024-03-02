import { useEffect, useRef, useState } from "react"
import "./styles.scss"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function S75percent() {
    const ref = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            event.preventDefault();
            const key = event.code;
            const keyElement = document.querySelector(`#k${key}`);

            if (keyElement) {
                keyElement.classList.remove('key__active');
                keyElement.classList.add('key__press');
            }
        };

        const handleKeyUpPress = (event) => {
            event.preventDefault();
            const key = event.code;
            const keyElement = document.querySelector(`#k${key}`);

            if (keyElement) {
                keyElement.classList.remove('key__press');
                keyElement.classList.add('key__active');
            }
        };

        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUpPress);
        document.addEventListener('press', handleKeyUpPress);
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUpPress);
            document.removeEventListener('press', handleKeyUpPress);
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".keybord",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r1_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 1.5,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r2_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 2,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r3_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 2.5,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r4_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 3,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r5_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 3.5,
                opacity: 1,
            }
        );

        gsap.fromTo(
            ".r6_row",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".keyboard",
                },
            },
            {
                duration: 1.5,
                delay: 4,
                opacity: 1,
            }
        );
    })

    return (
        <div className="keyboard" ref={ref}>
            <div className="keybord bg-blue-300 p-3">
                <div className="content">
                    <div className="keybord-top"></div>
                    <div className="key-block">
                        <div className="r1_row flex">
                            <div id="kEscape" className="key mr-14"><p>Esc</p></div>
                            <div id="kF1" className="key"><p>F1</p></div>
                            <div id="kF2" className="key"><p>F2</p></div>
                            <div id="kF3" className="key"><p>F3</p></div>
                            <div id="kF4" className="key"><p>F4</p></div>
                            <div id="kF5" className="key"><p>F5</p></div>
                            <div id="kF6" className="key"><p>F6</p></div>
                            <div id="kF7" className="key"><p>F7</p></div>
                            <div id="kF8" className="key"><p>F8</p></div>
                            <div id="kF9" className="key"><p>F9</p></div>
                            <div id="kF10" className="key"><p>F10</p></div>
                            <div id="kF11" className="key"><p>F11</p></div>
                            <div id="kF12" className="key"><p>F12</p></div>
                            <div id="kprint" className="key"><p>Prt<br />Sc</p></div>
                            <div id="kInsert" className="key"><p>Insert</p></div>
                            <div id="kDelete" className="key"><p>Delete</p></div>
                        </div>
                        <div className="r2_row flex">
                            <div id="kBackquote" className="key"><p>~<br />`</p></div>
                            <div id="kDigit1" className="key"><p>!<br />1</p></div>
                            <div id="kDigit2" className="key"><p>@<br />2</p></div>
                            <div id="kDigit3" className="key"><p>#<br />3</p></div>
                            <div id="kDigit4" className="key"><p>$<br />4</p></div>
                            <div id="kDigit5" className="key"><p>%<br />5</p></div>
                            <div id="kDigit6" className="key"><p>^<br />6</p></div>
                            <div id="kDigit7" className="key"><p>&<br />7</p></div>
                            <div id="kDigit8" className="key"><p>*<br />8</p></div>
                            <div id="kDigit9" className="key"><p>&#40;<br />9</p></div>
                            <div id="kDigit0" className="key"><p>&#41;<br />0</p></div>
                            <div id="kMinus" className="key"><p>_<br />-</p></div>
                            <div id="kEqual" className="key"><p>+<br />=</p></div>
                            <div id="kBackspace" className="key key__2u"><p>⟵</p></div>
                            <div id="kHome" className="key"><p>Home</p></div>
                        </div>
                        <div className="r3_row flex">
                            <div id="kTab" className="key key__1point5u"><p>Tab</p></div>
                            <div id="kKeyQ" className="key"><p>Q</p></div>
                            <div id="kKeyW" className="key"><p>W</p></div>
                            <div id="kKeyE" className="key"><p>E</p></div>
                            <div id="kKeyR" className="key"><p>R</p></div>
                            <div id="kKeyT" className="key"><p>T</p></div>
                            <div id="kKeyY" className="key"><p>Y</p></div>
                            <div id="kKeyU" className="key"><p>U</p></div>
                            <div id="kKeyI" className="key"><p>I</p></div>
                            <div id="kKeyO" className="key"><p>O</p></div>
                            <div id="kKeyP" className="key"><p>P</p></div>
                            <div id="kBracketLeft" className="key"><p>&#123;<br />&#91;</p></div>
                            <div id="kBracketRight" className="key"><p>&#125;<br />&#93;</p></div>
                            <div id="kBackslash" className="key key__1point5u"><p>|<br />\</p></div>
                            <div id="kPageUp" className="key"><p>Page<br />up</p></div>
                        </div>
                        <div className="r4_row flex">
                            <div id="kCapsLock" className="key key__1point75u"><p>Caps Lock</p></div>
                            <div id="kKeyA" className="key"><p>A</p></div>
                            <div id="kKeyS" className="key"><p>S</p></div>
                            <div id="kKeyD" className="key"><p>D</p></div>
                            <div id="kKeyF" className="key"><p>F</p></div>
                            <div id="kKeyG" className="key"><p>G</p></div>
                            <div id="kKeyH" className="key"><p>H</p></div>
                            <div id="kKeyJ" className="key"><p>J</p></div>
                            <div id="kKeyK" className="key"><p>K</p></div>
                            <div id="kKeyL" className="key"><p>L</p></div>
                            <div id="kSemicolon" className="key"><p>:<br />;</p></div>
                            <div id="kQuote" className="key"><p>"<br />'</p></div>
                            <div id="kEnter" className="key key__2point25u"><p>ENTER</p></div>
                            <div id="kPageDown" className="key"><p>Page<br />down</p></div>
                        </div>
                        <div className="r5_row flex">
                            <div id="kShiftLeft" className="key key__2point25u"><p>SHIFT</p></div>
                            <div id="kKeyZ" className="key"><p>Z</p></div>
                            <div id="kKeyX" className="key"><p>X</p></div>
                            <div id="kKeyC" className="key"><p>C</p></div>
                            <div id="kKeyV" className="key"><p>V</p></div>
                            <div id="kKeyB" className="key"><p>B</p></div>
                            <div id="kKeyN" className="key"><p>N</p></div>
                            <div id="kKeyM" className="key"><p>M</p></div>
                            <div id="kComma" className="key"><p>&lt;<br />,</p></div>
                            <div id="kPeriod" className="key"><p>&gt;<br />.</p></div>
                            <div id="kSlash" className="key"><p>?<br />/</p></div>
                            <div id="kShiftRight" className="key key__1point75u"><p>SHIFT</p></div>
                            <div id="kArrowUp" className="key"><p>&uarr;</p></div>
                            <div id="kEnd" className="key"><p>End</p></div>
                        </div>
                        <div className="r6_row flex">
                            <div id="kControlLeft" className="key key__1point25u"><p>CTRL</p></div>
                            <div id="kMetaLeft" className="key key__1point25u"><p>WIN</p></div>
                            <div id="kAltLeft" className="key key__1point25u"><p>ALT</p></div>
                            <div id="kSpace" className="key key__space2">SPACE</div>
                            <div id="kAltRight" className="key"><p>ALT</p></div>
                            <div id="kMetaRight" className="key"><p>WIN</p></div>
                            <div id="kControlRight" className="key"><p>CTRL</p></div>
                            <div id="kArrowLeft" className="key"><p>&larr;</p></div>
                            <div id="kArrowDown" className="key"><p>&darr;</p></div>
                            <div id="kArrowRight" className="key"><p>&rarr;</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default S75percent