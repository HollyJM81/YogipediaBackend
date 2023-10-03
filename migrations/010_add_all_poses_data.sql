INSERT INTO poses(pose_id, pose_name, sanskrit_name, pose_description, pose_benefits, url_png, category, level)
SELECT 1, 'Boat', 'Navasana', 'From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.  The tailbone is lengthened into the earth and the pubis pulls toward the navel.  The shoulder blades are spread across the back and the hands reach around the back of the calves, with legs pulled towards the body.  The chin is tipped slightly toward the sternum so that the base of the skull lifts lightly away from the back of the neck.  Gaze is forward.', 'Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.  Helps relieve stress.  Improves digestion.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.png', 'Core', 'Intermediate'
WHERE
  NOT EXISTS (
    Select pose_id FROM poses WHERE pose_id = 1
  );

VALUES
  (1, 'Boat', 'Navasana', 'From a seated position the feet are lifted up so that the thighs are angled about 45-50 degrees relative to the earth.  The tailbone is lengthened into the earth and the pubis pulls toward the navel.  The shoulder blades are spread across the back and the hands reach around the back of the calves, with legs pulled towards the body.  The chin is tipped slightly toward the sternum so that the base of the skull lifts lightly away from the back of the neck.  Gaze is forward.', 'Strengthens the abdomen, hip flexors, and spine.  Stimulates the kidneys, thyroid and prostate glands, and intestines.  Helps relieve stress.  Improves digestion.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483071/yoga-api/1_txmirf.png', 'Core', 'Intermediate'),
  (2, 'Half Boat', 'Ardha Navasana', 'From a seated position the hands are gripped around the back of the legs and the knees are bent in a 90 degree angle.  Both legs are pulled in towards the abdomen.  The core is engaged to maintain balance on the sits bones (be sure that the back does not round).  The front of the torso lengthens between the pubis and top of the sternum as the spine extends in both directions reaching up to the sky and rooting down to the earth.  The gaze is forward and Bandhas are engaged.', 'Strengthens the abdomen, hip flexors and spine.  Stimulates the kidneys, thyroid, prostate glands and intestines.  Helps relieve stress.  Improves digestion.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483073/yoga-api/2_ozh7sv.png', 'Core', 'Beginner'),
  (3, 'Cat', 'Marjaryasana', 'From box neutral shift some weight to the palms.  The wrists, elbows and shoulders are in one line.  The abdomen is pulled in and up with the spine arched in a strong Cobra spine.  The crown of the head is towards the earth and the neck is relaxed.  The gaze is between the arms towards the belly.', 'Relieves the spine and neck. Energizes the body.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483075/yoga-api/7_a6aspg.png', 'Core', 'Beginner'),
  (4, 'Chair', 'Utkatasana', 'From a standing position, the feet are together and rooted into the earth with toes actively lifted.  The knees are bent and the weight of the body is on the heels of the feet.  The pelvis is tucked in and the ribcage is lifted.  The neck is a natural extension of the spine.  The arms are lifted up toward the sky with the elbows straight and the biceps by the ears.  The hands can be together or separated and facing each other with the fingers spread wide.  The gaze is forward.', 'Strengthens the ankles, thighs, calves, and spine.  Stretches shoulders and chest.  Stimulates the abdominal organs, diaphragm, and heart.  Reduces flat feet.  Energizes the entire body.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483078/yoga-api/9_ewvoun.png', 'Core', 'Beginner'),
  (5, 'Crow', 'Bakasana', 'From an inverted position, with the hips up and the head down, the arms are bent in a 90-degree angle with the knees resting on the elbows.  The palms are firmly rooted into the earth with knuckles pressed firmly into the earth for support.  The belly is pulled up and in towards the spine with the ribcage and chin lifted.  The weight of the body shifts slightly forward as the toes lift up and off the earth into the full expression of the pose.  The gaze is down and slightly forward.', 'Strengthens arms and wrists.  Stretches the upper back.  Strengthens the abdominal muscles.  Opens the groin.  Tones the abdominal organs.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483083/yoga-api/13_hdjxuz.png', 'Core', 'Intermediate'),
  (6, 'Dolphin', 'Ardha Pincha Mayurasana', 'From Downward-Facing Dog, the forearms are planted onto the earth with the elbows narrow and the palms down in a Sphinx position. The pelvis is tucked. The ribcage lifted. The feet are rooted and the legs are straight with the tailbone in dog tilt. The gaze is down and slightly forward.', 'Calms the brain and helps relieve stress and mild depression. Energizes the body. Stretches the shoulders, hamstrings, calves, arches, and hands. Strengthens the arms and legs. Helps relieve the symptoms of menopause. Relieves menstrual discomfort when done with the head supported. Helps prevent osteoporosis. Improves digestion. Relieves headache, insomnia, back pain, and fatigue. Therapeutic for high blood pressure, asthma, flat feet, sciatica, and sinusitis. Warms up the ankles and the toes.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483080/yoga-api/14_k9lr9a.png', 'Core', 'Advanced'),
  (7, 'Plank', 'Phalakasana', 'The body is parallel to the earth.  The weight of the body is supported by straight arms and active toes.  The abdomen is pulled up towards the spine and the pelvis is tucked in.  The neck is a natural extension of the spine and the chin is slightly tucked.  The palms are flat and the elbows are close to the side body.  The joints are stacked with the wrists, elbows and shoulders in a straight line perpendicular to the earth.  The gaze follows the spine and the eyes are focused down.', 'Strengthens the arms, wrists, and spine.  Tones the abdomen.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483088/yoga-api/26_mxkzlo.png', 'Core', 'Beginner'),
  (8, 'Side Plank', 'Vasisthasana', 'From an arm balance position the weight of the body is supported on one side and distributed equally between the bottom arm and foot while the other (top) arm lifts with fingers spread wide and the other (top) foot stacks on top.  The grounded (bottom) foot is flat and gripping the earth from the outside edge of the foot.  If flexibility of the foot is limited then instead of gripping the earth with a flat foot, the weight of the body is balanced on the side edge of the foot that is flexed instead of flat.  The arm supporting the weight of the body and the grounded foot actively press into the floor as the shoulder blades firm against the back and then widen away from the spine drawing toward the tailbone.  Bandhas are engaged to maintain balance and stability.  The crown of the head reaches away from the neck and the gaze is up towards the hand.', 'Calms the brain and helps relieve stress and mild depression.  Stretches the shoulders, hamstrings, calves, and arches.  Strengthens the arms and legs.  Helps relieve the symptoms of menopause.  Helps prevent osteoporosis.  Improves digestion.  Relieves headache, insomnia, back pain, and fatigue.  Therapeutic for high blood pressure, asthma, flat feet, sciatica.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483093/yoga-api/34_qle5tp.png', 'Core', 'Intermediate'),
  (9, 'Butterfly', 'Baddha Konasana', 'In sitting position, bend both knees and drop the knees to each side, opening the hips.  Bring the soles of the feet together and bring the heels as close to the groin as possible, keeping the knees close to the ground.  The hands may reach down and grasp and maneuver the feet so that the soles are facing upwards and the heels and little toes are connected.  The shoulders should be pulled back and no rounding of the spine.', 'Opens the hips and groins.  Stretches the shoulders, rib cage and back.  Stimulates the abdominal organs, lungs and heart.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483074/yoga-api/5_i64gif.png', 'Seated', 'Beginner'),
  (10, 'Seated Forward Bend', 'Paschimottanasana', 'From a seated position with the sits bones rooted into the earth the legs extend forward to the degree that the chest and thighs can stay connected.  The fingers wrap around the toes.  The upper torso folds forward at the crease of the hips with the spine long.  The gaze is forward.', 'Calms the brain and helps relieve stress and mild depression.  Stretches the spine, shoulders and hamstrings.  Stimulates the liver, kidneys, ovaries and uterus.  Improves digestion.  Helps relieve the symptoms of menopause and menstrual discomfort.  Soothes headache and anxiety.  Reduces fatigue.  Therapeutic for high blood pressure, infertility, insomnia and sinusitis.  Traditional texts say that Paschimottanasana increases appetite, reduces obesity and cures diseases.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483091/yoga-api/30_gumpl3.png', 'Seated', 'Beginner'),
  (11, 'Lotus', 'Padmasana', 'Bring the bottom ankle and place it on top of the opposite knee, both ankles will be resting on top of the thighs.', 'Opens the hips, groin and stretches the knees, ankles and thighs.  Strengthens the back and calms the mind, reduces stress and anxiety.  Improves circulation and blood flow in the pelvis.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483091/yoga-api/31_ozseum.png', 'Seated', 'Advanced'),
  (12, 'Half Lord of the Fishes', 'Ardha Matsyendrasana', 'Begin in a seated position. Bend one knee so the sole of your foot is close to the opposite inner thigh. Bend your opposite knee in, foot on the floor, heel to the outside of your bent thigh. Extend your arm (same side of your Lotus leg) high into the sky and begin to twist it to the outside of your bent knee. Use your opposite hand as leverage to twist deeper. Hook your elbow to the outside of your thigh and gaze over your back shoulder. If you want to extend your twist deeper, wrap your arm around the shin of your bent knee and sweep your opposite arm around to meet it. Catch opposite fingertips or the wrist. Keep a long spine.', 'Stretches the shoulders, the chest, the thighs, the groins, and the abdomen.  Strengthens the legs and the ankles.  Improves balance.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483091/yoga-api/32_hafoa0.png', 'Seated', 'Advanced'),
  (13, 'Splits', 'Hanumanasana', 'The hips are parallel and squared to the earth with one leg extended forward.  The opposite leg extended back with the knee and foot squared to the earth.  The inner thighs scissor towards each other.  The hands are by the side body or at the heart center in Anjali Mudra (Salutation Seal) or stretched straight up toward the sky.  The ribcage is lifted.  The heart is open.  The gaze is forward.', 'Stretches the thighs, hamstrings, and groin.  Stimulates the abdominal organs.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483092/yoga-api/36_a2z20a.png', 'Seated', 'Advanced'),
  (14, 'Side Splits', 'Upavistha Konasana', 'From a wide stance the legs are open and extended sideways to your degree of flexibility.  The outer edges of the feet are rotated and gripping toward the earth.  The weight of the body is supported by the arms.  The palms are rooted into the earth with the fingers pointing towards the body.  There should be no excess weight on the knee or ankle joints as you lower down to your degree of flexibility. The gaze is down and slightly forward.', 'Stretches the insides and backs of the legs.  Stimulates the abdominal organs.  Strengthens the spine.  Calms the brain.  Releases groin.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483093/yoga-api/40_dkmow6.png', 'Seated', 'Advanced'),
  (15, 'Downward-Facing Dog', 'Adho Mukha Svanasana', 'The legs are straight with the sits bones tilted up and reaching for the sky.  The feet are flat with the heels firmly rooted.  One palm is flat with the knuckles evenly pressed into the earth.  The other hand reaches under the body and grasps the opposite ankle.  The spine is long and the heart is open toward the sky.  The neck is loose and the crown of the head is relaxed toward the earth.  The gaze is toward the center.', 'Calms the brain and helps relieve stress and mild depression.  Energizes the body.  Stretches the shoulders, neck, hamstrings, calves, arches, and hands.  Strengthens the arms and legs.  Helps relieve the symptoms of menopause.  Relieves menstrual discomfort when done with the head supported.  Helps prevent osteoporosis.  Improves digestion.  Relieves headache, insomnia, back pain, and fatigue.  Therapeutic for high blood pressure, asthma, flat feet, sciatica, and sinusitis.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483081/yoga-api/15_vkviqn.png', 'Strengthening', 'Beginner'),
  (16, 'Extended Side Angle', 'Utthita Parsvakonasana', 'From warrior II the lower body stays static while the upper body is folded forward at the crease of the hip.  One arm is extended toward the front with the bicep by the ear and the fingers spread wide while the other reaches down to the earth on the inside of the thigh.  The upper torso and the gaze twist up towards the sky.', 'Strengthens and stretches the legs, knees, and ankles.  Stretches the groin, spine, waist, chest, lungs, and shoulders. Stimulates abdominal organs. Increases stamina.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483083/yoga-api/18_aqufak.png', 'Strengthening', 'Intermediate'),
  (17, 'Forearm Stand', 'Pincha Mayurasana', 'From an inverted position, with the body perpendicular to the earth, the weight of the body is supported on the forearms that are parallel and pressed firmly into the earth.  The palms are flat.  The knuckles are evenly pressed into the earth.  The fingers are spread wide.  Both legs reach up toward the sky in a straight line with the pelvis tucked.  The ribcage is lifted.  The gaze is forward.', 'Strengthens arms and shoulders.  Improves focus and balance.  Stretches the upper and lower back.  Strengthens the abdominal muscles.  Tones the abdominal area.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483084/yoga-api/19_jadqwc.png', 'Strengthening', 'Advanced'),
  (18, 'Handstand', 'Adho Mukha Vrksasana', 'In this inverted posture the weight of the body is on the hands - shoulder-width apart with fingers forward and parallel to each other (if the shoulders are tight, the index fingers are turned out slightly).  The shoulder blades are firm against the back torso and pulled up toward the tailbone.  The upper arms are rotated outward with the eye of the elbow to the front of the room to keep the shoulder blades broad while the outer arms hug inward in opposing forces for balance and stability.  The palms are spread and the bases of the index fingers are pressed firmly against the earth.  Balance is maintained by keeping the Bandhas engaged while pressing the earth away with straight arms and flexed feet.  The gaze is down and forward.', 'Strengthens the shoulders, arms and wrists.  Stretches the belly.  Improves sense of balance.  Calms the brain and helps relieve stress and mild depression.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483085/yoga-api/22_ojzmr8.png', 'Strengthening', 'Advanced'),
  (19, 'Pyramid', 'Parsvottanasana', 'From a standing position with one leg forward and one back lean the torso forward at the crease of the hip joint.  Stop when the torso is parallel to the floor.  Press the fingertips or flat palms to the floor on either side of the front foot, maintaining a straight elongated spine.  If it isn’t possible to touch the floor, or to maintain a straight spine, support the hands on a pair of blocks.  Press the thighs back and lengthen the torso forward, lifting up through the top of the sternum.  Then, as flexibility allows, bring the front torso closer to the top of the thigh without rounding the spine.  Eventually the long front torso will rest down on the thigh.  The gaze is down.', 'Calms the brain.  Stretches the spine, the shoulders, the hips and the hamstrings.  Strengthens the legs.  Stimulates the abdominal organs.  Improves posture and sense of balance.  Improves digestion.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483089/yoga-api/28_uu58tt.png', 'Strengthening', 'Advanced'),
  (20, 'Triangle', 'Trikonasana', 'From a standing position, the legs are straight and separated into a wide stance.  The feet are aligned and flat on the earth with the back foot in a 60-degree angle towards the front.  The inner thighs are rotated externally away from each other.  The pelvis is tucked and the ribcage is lifted.  One arm extends up towards the sky as the other reaches down to the earth.  Both arms are aligned with the shoulders in a straight line.  The fingers reach out as the shoulder blades squeeze together.  The gaze is toward the front.', 'Stretches and strengthens the thighs, knees, and ankles.  Stretches the hips, groin, hamstrings, calves, shoulders, chest, and spine.  Stimulates the abdominal organs.  Helps relieve stress.  Improves digestion.  Helps relieve the symptoms of menopause.  Relieves backache, especially through second trimester of pregnancy.  Therapeutic for anxiety, flat feet, infertility, neck pain, osteoporosis, and sciatica.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483096/yoga-api/42_jawxqw.png', 'Strengthening', 'Beginner'),
  (21, 'Warrior One', 'Virabhadrasana One', 'From a standing position, the legs are in a wide stance with the feet aligned and flat on the earth.  The back foot is in a 60-degree angle towards the front.  The hips are squared.  The inner thighs are rotated towards each other.  The front knee is bent in a 90-degree angle directly above the ankle.  The arms extend up to the sky with the biceps by the ears.  The hands can be together or separated and facing each other with the fingers spread wide.  The ribcage is lifted and the pelvis tucked.  The gaze is forward.', 'Stretches the chest, lungs, shoulders, neck, belly and groin (psoas).  Strengthens the shoulders, arms and back muscles.  Strengthens and stretches the thighs, calves and ankles.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483096/yoga-api/44_dqeayo.png', 'Strengthening', 'Beginner'),
  (22, 'Warrior Two', 'Virabhadrasana Two', 'From a standing position, the legs are separated into a wide stance.  The front knee is bent in a 90-degree angle directly above the ankle.  The back leg is extended and straight with the outside edge of the back foot gripping the earth in a 60-degree angle towards the front.  The inner thighs are externally rotated away from each other.  The pelvis is tucked.  The ribcage is lifted.  The arms are extended out to the sides and are aligned with the shoulders in a straight line with the fingers reaching out as the shoulder blades squeeze together.  The gaze is toward the front fingers.', 'Strengthens and stretches the legs and ankles.  Stretches the groin, chest, lungs, and shoulders.  Stimulates abdominal organs.  Increases stamina.  Relieves backaches, especially through second trimester of pregnancy.  Therapeutic for carpal tunnel syndrome, flat feet, infertility, osteoporosis, and sciatica.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483096/yoga-api/45_ehimr1.png', 'Strengthening', 'Beginner'),
  (23, 'Warrior Three', 'Virabhadrasana Three', 'From a standing position, one leg is rooted and perpendicular to the earth while the other leg is raised, extended back and parallel to the earth.  The head of the thighbone of the standing leg presses back towards the heel and is actively rooted into the earth.  The arms and the extended leg lengthen in opposing directions with Bandhas engaged.  The hips are squared and the tailbone presses firmly into the pelvis.  The arms, torso, and extended raised leg should be positioned relatively parallel to the floor.  The gaze is forward or down.', 'Strengthens the ankles and legs.  Strengthens the shoulders and muscles of the back.  Tones the abdomen.  Improves balance and posture.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483097/yoga-api/46_lz6v7i.png', 'Strengthening', 'Intermediate'),
  (24, 'Wheel', 'Urdhva Dhanurasana', 'Pressed up from a supine position, lying on your back, the palms are rooted into the earth with the fingers pointed towards the heels.  The feet are grounded.  The hips are pressed up.  The thighs are rotated inward.  The thoracic spine is arched creating a strong crescent arch along the spinal column.  The gaze is forward.', 'Strengthens the arms, wrists, legs, buttocks, abs, and spine.  Stimulates the thyroid and pituitary.  Increases energy and counteracts depression.  Therapeutic for asthma, back pain, infertility, and osteoporosis.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483097/yoga-api/47_w2jsof.png', 'Strengthening', 'Intermediate'),
  (25, 'Bow', 'Dhanurasana', 'From a prone position with the abdomen on the earth, the hands grip the ankles (but not the tops of the feet) with knees no wider than the width of your hips.  The heels are lifted away from the buttocks and at the same time the thighs are lifted away from the earth working opposing forces as the heart center, hips and back open.  The gaze is forward.', 'Stretches the entire front of the body, ankles, thighs and groins, abdomen and chest, and throat, and deep hip flexors (psoas).  Strengthens the back muscles.  Improves posture.  Stimulates the organs of the abdomen and neck.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483072/yoga-api/3_aa0fgk.png', 'Chest Opening', 'Intermediate'),
  (26, 'Camel', 'Ustrasana', ';From a kneeling position the knees are hip width apart and the thighs are perpendicular to the earth.  The inner thighs are narrowed and rotated slightly inward with the buttocks engaged but not hardened.  The tailbone is tucked under but the hips do not puff forward. The ribcage is open, along with the heart center, but the lower front ribs do not protrude sharply towards the sky.  The lower back lifts the ribs away from the pelvis to keep the lower spine as long as possible.  The base of the palms are pressed firmly against the soles (or heels) of the feet and the fingers are pointed toward the toes.  The arms are extended straight and are turned slightly outward at the shoulder joint so the elbow creases face forward without squeezing the shoulder blades together.  The neck is in a relatively neutral position, neither flexed nor extended, or (for the advanced practitioners only) the head drops back. The gaze is either towards the sky or towards the earth, depending upon your flexibility.', 'Stretches the entire front of the body, the ankles, thighs and groins, abdomen and chest, and throat.  Stretches the deep hip flexors (psoas).  Strengthens back muscles.  Improves posture.  Stimulates the organs of the abdomen and neck.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483075/yoga-api/6_ri1w0e.png', 'Chest Opening', 'Intermediate'),
  (27, 'Cow', 'Bitilasana', 'From  box neutral the ribcage is lifted with a gentle sway in the low back.  The tailbone lifts up into dog tilt.  The eyes are soft and the gaze is to the sky.', 'Removes fatigue.  Improves breathing and the circulation of blood to the brain.  Rejuvenates the entire body.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483077/yoga-api/8_wi10sn.png', 'Chest Opening', 'Beginner'),
  (28, 'Upward-Facing Dog', 'Urdhva Mukha Svsnssana', 'The body is in a prone position parallel to the earth.  The weight of the body is supported equally by the straight arms and the tops of the feet which press firmly into the earth.  The shoulders are rotated back and down.  The ribcage is lifted and pulled thru to the front in a slight upper thoracic backbend.  The joints are stacked with the wrists, elbows and shoulders in a straight-line.  The neck is a natural extension of the spine and the chin is slightly tucked.  The abdomen is pulled up towards the spine.  The palms are flat and the elbows are close to the side body.  The gaze is forward.', 'Improves posture.  Strengthens the spine, arms, and wrists.  Stretches the chest, lungs, shoulders, and abdomen.  Firms the buttocks.  Stimulates abdominal organs.  Helps relieve mild depression, fatigue, and sciatica.  Therapeutic for asthma.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483096/yoga-api/43_m3nxjk.png', 'Chest Opening', 'Intermediate'),
  (29, 'Wild Thing', 'Camatkarasana', 'From downward dog pose, elevate one leg toward the sky and stack the corresponding hip over the other hip.  Bring the upper heel as close to the buttocks as possible.  The hips remain stacked; then bring the shoulders forward slowly over the hands.  Replace the corresponding hand to the upraised leg with the other hand and flip yourself over and extend the top hand forward.  The bottom foot is now facing toward the front of the mat and you remain on the ball of the top foot and the corresponding knee is bent.  Continue to lift hips up towards the sky and continue reaching the free hand towards the front of the room and slightly downwards.  Allow the head to curl back.', 'Stretches the chest, shoulders, back, and throat.  Strengthens and opens the hips, hip flexors, and thighs.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483097/yoga-api/48_unoav6.png', 'Chest Opening', 'Advanced'),
  (30, 'Pigeon', 'Supta Kapotasana', 'Lie on the back in supine position.  Bend the knees, heels close to SI bones and cross one ankle over the opposite knee.  Thread the hands or reach through between the thighs.  Lift the foot off the floor and hold the bent knee behind the thigh or shin to bring it closer to the chest, make sure that the acrum is rooted to the floor.', 'Stretches the hamstrings and quads.  If the elbow is used to push the thigh, it opens the hips as well.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483088/yoga-api/24_ulgsjo.png', 'Backbend', 'Intermediate'),
  (31, 'King Pigeon', 'Eka Pada Rajakapotasana', 'From a seated position with the hips squared, one leg is extended forward with the knee bent and parallel to the earth.  The front heel is rooted close to the groin (or extended out in a 90 degree angle if flexibility allows).  The other leg is extended back with the knee bent and perpendicular to the earth.  The back foot is hooked on the inside of the elbow of the back arm.  The front elbow is bent upward perpendicular to the earth with the bicep by the ear.  The fingers are interlaced to connect the bind behind the body and assist in opening the chest.  The gaze is natural and forward.', 'Stretches the thighs, groins (psoas), abdomen, chest, shoulders and neck.  Stimulates the abdominal organs.  Opens the shoulders and chest.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483087/yoga-api/25_rssro9.png', 'Backbend', 'Intermediate'),
  (32, 'Sphinx', 'Salamba Bhujangasana', 'From a prone position with the pelvic bowl is firmly contracted interiorly towards the center line of the body while the pubis is tucked under.  The legs are extended back and the tops of the feet are flat.  The palms are flat and the elbows are on the mat, stacked right below the shoulders.  On an inhalation, lift the sternum and extend the neck away from shoulders with the elbows, palms and pelvic bone firmly attached to the mat.', 'Strengthens the spine.  Stretches the chest, the lungs, the shoulders and the abdomen.  Stimulates the abdominal organs.  Opens the heart and the lungs.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483092/yoga-api/35_dytwvz.png', 'Backbend', 'Beginner'),
  (33, 'Upward-Facing Dog', 'Urdhva Mukha Svsnssana', 'The body is in a prone position parallel to the earth.  The weight of the body is supported equally by the straight arms and the tops of the feet which press firmly into the earth.  The shoulders are rotated back and down.  The ribcage is lifted and pulled thru to the front in a slight upper thoracic backbend.  The joints are stacked with the wrists, elbows and shoulders in a straight-line.  The neck is a natural extension of the spine and the chin is slightly tucked.  The abdomen is pulled up towards the spine.  The palms are flat and the elbows are close to the side body.  The gaze is forward.', 'Improves posture.  Strengthens the spine, arms, and wrists.  Stretches the chest, lungs, shoulders, and abdomen.  Firms the buttocks.  Stimulates abdominal organs.  Helps relieve mild depression, fatigue, and sciatica.  Therapeutic for asthma.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483096/yoga-api/43_m3nxjk.png', 'Backbend', 'Intermediate'),
  (34, 'Wheel', 'Urdhva Dhanurasana', 'Pressed up from a supine position, lying on your back, the palms are rooted into the earth with the fingers pointed towards the heels.  The feet are grounded.  The hips are pressed up.  The thighs are rotated inward.  The thoracic spine is arched creating a strong crescent arch along the spinal column.  The gaze is forward.', 'Strengthens the arms, wrists, legs, buttocks, abs, and spine.  Stimulates the thyroid and pituitary.  Increases energy and counteracts depression.  Therapeutic for asthma, back pain, infertility, and osteoporosis.', 'https://res.cloudinary.com/dko1be2jy/image/upload/fl_sanitize/v1676483097/yoga-api/47_w2jsof.png', 'Backbend', 'Beginner')