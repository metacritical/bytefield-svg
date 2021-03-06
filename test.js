#!/usr/bin/env node

var generate = require('./lib.js');

var diagram = `
;; Figure 48: Cue point response message.

(draw-column-headers)

(draw-group-label-header 5 "start")
(draw-group-label-header 5 "TxID")
(draw-group-label-header 3 "type")
(draw-group-label-header 2 "args")
(draw-group-label-header 1 "tags")
(next-row :height 18)

(draw-row-header "00")
(draw-box :text (hex-text "11") :fill green)
(draw-box :span 4 :text (hex-text "872349ae") :fill green)
(draw-box :text (hex-text "11") :fill yellow)
(draw-box :span 4 :text (label-text "TxID") :fill yellow)
(draw-box :text (hex-text "10") :fill pink)
(draw-box :span 2 :text (hex-text "4702") :fill pink)
(draw-box :text (hex-text "0f") :fill cyan)
(draw-box :text (hex-text "09") :fill cyan)
(draw-box :text (hex-text "14") :fill purple)
(next-row)

(draw-row-header "10")
(draw-box :span 4 :text (svg/text {:font-size         18
                                   :font-family       hex-family
                                   :dominant-baseline "middle"
                                   :text-anchor       "middle"}
                                  "0000000c "
                                  (svg/tspan {:font-family       serif-family
                                              :font-size         16
                                              :font-weight       "light"
                                              :dominant-baseline "middle"}
                                             "(12)"))
          :fill purple)
(draw-box :text (hex-text "06") :borders #{:left :top :bottom} :fill purple)
(doseq [val ["06" "06" "03" "06" "06" "06" "06" "03" "00" "00"]]
  (draw-box :text (hex-text val) :borders #{:top :bottom} :fill purple))
(draw-box :text (hex-text "00") :borders #{:right :top :bottom} :fill purple)
(next-row)


(draw-row-header "20")
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (hex-text "00002104"))
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (hex-text "00000000"))
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (label-text "length" "1"))
(draw-box :text (hex-text "14"))
(next-row)

(draw-row-header "30")
(draw-box :span 4 :text (label-text "length" "1"))
(draw-box :span 12 :text (svg/text {:font-family serif-family}
                                   "Cue and loop point bytes") :borders #{:left :right :top})
(next-row)
(draw-gap)

(draw-box)
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (hex-text "00000036"))
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (label-text "num" "hot"))
(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (label-text "num" "cue"))
(next-row)

(draw-box :text (hex-text "11"))
(draw-box :span 4 :text (label-text "length" "2"))
(draw-box :text (hex-text "14"))
(draw-box :span 4 :text (label-text "length" "2"))
(draw-box :span 6 :text (svg/text {:font-family serif-family}
                                   "Unknown bytes") :borders #{:left :right :top})
(next-row)
(draw-gap)
(draw-bottom)
`;

process.stdout.write(generate(diagram));
