import { useEffect, useRef, useState } from "react"
import "./styles.scss"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function FullSize() {

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
            keyRecord(list(key));
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

    const keyRecord = (key) => {
        const str = "<p><span>" + "{" + key + "}" + "</span></p>"
        const keyRecorded = document.querySelector(".keybord-top");
        if (keyRecorded) {
            keyRecorded.insertAdjacentHTML("afterbegin", str)
        }
    }

    function list(key) {
        switch (key) {
            case 'Escape': return 'Esc'; break;
            case 'F1': return 'F1'; break;
            case 'F2': return 'F2'; break;
            case 'F3': return 'F3'; break;
            case 'F4': return 'F4'; break;
            case 'F5': return 'F5'; break;
            case 'F6': return 'F6'; break;
            case 'F7': return 'F7'; break;
            case 'F8': return 'F8'; break;
            case 'F9': return 'F9'; break;
            case 'F10': return 'F10'; break;
            case 'F11': return 'F11'; break;
            case 'F12': return 'F12'; break;
            case 'ScrollLock': return 'Scroll Lock'; break;
            case 'Pause': return 'Pause'; break;
            case 'Insert': return 'Insert'; break;
            case 'Delete': return 'Delete'; break;
            case 'Home': return 'Home'; break;
            case 'End': return 'End'; break;
            case 'PageUp': return 'Page up'; break;
            case 'PageDown': return 'Page down'; break;
            case 'Backquote': return '~'; break;
            case 'Digit1': return '1'; break;
            case 'Digit2': return '2'; break;
            case 'Digit3': return '3'; break;
            case 'Digit4': return '4'; break;
            case 'Digit5': return '5'; break;
            case 'Digit6': return '6'; break;
            case 'Digit7': return '7'; break;
            case 'Digit8': return '8'; break;
            case 'Digit9': return '9'; break;
            case 'Digit0': return '0'; break;
            case 'Minus': return '-_'; break;
            case 'Equal': return '=+'; break;
            case 'Backspace': return 'Backspace'; break;
            case 'NumLock': return 'Num Lock'; break;
            case 'NumpadDivide': return 'num /'; break;
            case 'NumpadMultiply': return 'num *'; break;
            case 'NumpadSubtract': return 'num -'; break;
            case 'Tab': return 'Tab'; break;
            case 81: return 'Q'; break;
            case 87: return 'W'; break;
            case 69: return 'E'; break;
            case 82: return 'R'; break;
            case 84: return 'T'; break;
            case 89: return 'Y'; break;
            case 85: return 'U'; break;
            case 73: return 'I'; break;
            case 79: return 'O'; break;
            case 80: return 'P'; break;
            case 219: return '[{'; break;
            case 221: return ']}'; break;
            case 220: return '|\\'; break;
            case 103: return 'num 7'; break;
            case 104: return 'num 8'; break;
            case 105: return 'num 9'; break;
            case 107: return 'num +'; break;
            case 20: return 'Caps Lock'; break;
            case 65: return 'A'; break;
            case 83: return 'S'; break;
            case 68: return 'D'; break;
            case 70: return 'F'; break;
            case 71: return 'G'; break;
            case 72: return 'H'; break;
            case 74: return 'J'; break;
            case 75: return 'K'; break;
            case 76: return 'L'; break;
            case 59: return ';:'; break;
            case 186: return ';:'; break;
            case 222: return '\'"'; break;
            case 100: return 'num 4'; break;
            case 101: return 'num 5'; break;
            case 102: return 'num 6'; break;
            case 90: return 'Z'; break;
            case 88: return 'X'; break;
            case 67: return 'C'; break;
            case 86: return 'V'; break;
            case 66: return 'B'; break;
            case 78: return 'N'; break;
            case 77: return 'M'; break;
            case 188: return ',<'; break;
            case 190: return '.>'; break;
            case 191: return '/?'; break;
            case 96: return 'num 0'; break;
            case 32: return 'Space'; break;
            case 93: return 'menu'; break;
            case 38: return '\u2191'; break;
            case 40: return '\u2193'; break;
            case 37: return '\u2190'; break;
            case 39: return '\u2192'; break;
            case 110: return 'num .'; break;
            case 97: return 'num 1'; break;
            case 98: return 'num 2'; break;
            case 99: return 'num 3'; break;
            case 0: return 'Left Click'; break;
            case 1: return 'Scroll Click'; break;
            case 2: return 'Right Click'; break;
            case 16: return 'Shift'; break;
            case 18: return 'ALT'; break;
            case 17: return 'CTRL'; break;
            case 91: return 'WIN'; break;
            case 13: return 'Enter'; break;
            case 44: return 'Prt Sc'; break;
        }
    }

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
                        <div className="r1_row flex" style={{ marginBottom: "10px" }}>
                            <div id="kEscape" className="key mr-14"><p>Esc</p></div>
                            <div className="key key__hidden"></div>
                            <div id="kF1" className="key"><p>F1</p></div>
                            <div id="kF2" className="key"><p>F2</p></div>
                            <div id="kF3" className="key"><p>F3</p></div>
                            <div id="kF4" className="key"><p>F4</p></div>
                            <div className="key key__hiddenHalf"></div>
                            <div id="kF5" className="key"><p>F5</p></div>
                            <div id="kF6" className="key"><p>F6</p></div>
                            <div id="kF7" className="key"><p>F7</p></div>
                            <div id="kF8" className="key"><p>F8</p></div>
                            <div className="key key__hiddenHalf"></div>
                            <div id="kF9" className="key"><p>F9</p></div>
                            <div id="kF10" className="key"><p>F10</p></div>
                            <div id="kF11" className="key"><p>F11</p></div>
                            <div id="kF12" className="key key__side"><p>F12</p></div>
                            <div id="kprint" className="key"><p>Prt<br />Sc</p></div>
                            <div id="kScrollLock" className="key"><p>Scr<br />Lk</p></div>
                            <div id="kPause" className="key"><p>Pause<br />break</p></div>
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
                            <div id="kBackspace" className="key key__2u key__side"><p>⟵</p></div>
                            <div id="kInsert" className="key"><p>Insert</p></div>
                            <div id="kHome" className="key"><p>Home</p></div>
                            <div id="kPageUp" className="key key__side"><p>Page<br />up</p></div>
                            <div id="kNumLock" className="key"><p>Num<br />Lock</p></div>
                            <div id="kNumpadDivide" className="key"><p>/</p></div>
                            <div id="kNumpadMultiply" className="key"><p>*</p></div>
                            <div id="kNumpadSubtract" className="key"><p>-</p></div>
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
                            <div id="kBackslash" className="key key__1point5u key__side"><p>|<br />\</p></div>
                            <div id="kDelete" className="key"><p>Delete</p></div>
                            <div id="kEnd" className="key"><p>End</p></div>
                            <div id="kPageDown" className="key key__side"><p>Page<br />down</p></div>
                            <div id="kNumpad7" className="key"><p>7</p></div>
                            <div id="kNumpad8" className="key"><p>8</p></div>
                            <div id="kNumpad9" className="key"><p>9</p></div>
                            <div id="kNumpadAdd" className="key key__2uVertical float-right"><p>+</p></div>
                        </div>
                        <div className="r4_row flex" style={{ marginTop: "-56px" }}>
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
                            <div id="kEnter" className="key key__2point25u key__extremlySide"><p>ENTER</p></div>
                            <div id="kNumpad4" className="key"><p>4</p></div>
                            <div id="kNumpad5" className="key"><p>5</p></div>
                            <div id="kNumpad6" className="key"><p>6</p></div>
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
                            <div id="kShiftRight" className="key key__2point75u key__moreSize"><p>SHIFT</p></div>
                            <div id="kArrowUp" className="key key__moreSize"><p>&uarr;</p></div>
                            <div id="kNumpad1" className="key"><p>1</p></div>
                            <div id="kNumpad2" className="key"><p>2</p></div>
                            <div id="kNumpad3" className="key"><p>3</p></div>
                            <div id="kNumpadEnter" className="key key__2uVertical float-right"><p>Enter</p></div>
                        </div>
                        <div className="r6_row flex" style={{ marginTop: "-56px" }}>
                            <div id="kControlLeft" className="key key__1point25u"><p>CTRL</p></div>
                            <div id="kMetaLeft" className="key key__1point25u"><p>WIN</p></div>
                            <div id="kAltLeft" className="key key__1point25u"><p>ALT</p></div>
                            <div id="kSpace" className="key key__space">SPACE</div>
                            <div id="kAltRight" className="key key__1point25u"><p>ALT</p></div>
                            <div id="kContextMenu" className="key key__1point25u">MENU</div>
                            <div id="kMetaRight" className="key key__1point25u"><p>WIN</p></div>
                            <div id="kControlRight" className="key key__1point25u" style={{ marginRight: "12px" }}><p>CTRL</p></div>
                            <div id="kArrowLeft" className="key"><p>&larr;</p></div>
                            <div id="kArrowDown" className="key"><p>&darr;</p></div>
                            <div id="kArrowRight" className="key" style={{ marginRight: "12.5px" }}><p>&rarr;</p></div>
                            <div id="kNumpad0" className="key key__2u"><p>0</p></div>
                            <div id="kNumpadDecimal" className="key"><p>.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullSize