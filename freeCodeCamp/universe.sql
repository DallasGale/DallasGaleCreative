--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: astronomer; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.astronomer (
    first_name character varying NOT NULL,
    born integer NOT NULL,
    discovered character varying,
    died integer,
    astronomer_id integer NOT NULL,
    last_name character varying,
    name character varying
);


ALTER TABLE public.astronomer OWNER TO freecodecamp;

--
-- Name: astronomers_astronomer_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.astronomers_astronomer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.astronomers_astronomer_id_seq OWNER TO freecodecamp;

--
-- Name: astronomers_astronomer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.astronomers_astronomer_id_seq OWNED BY public.astronomer.astronomer_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying NOT NULL,
    composition text NOT NULL,
    has_black_hole boolean,
    year_discovered integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying NOT NULL,
    distance_from_planet_km numeric NOT NULL,
    feature character varying,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying NOT NULL,
    distance_from_sun_km bigint NOT NULL,
    radius integer,
    hours_orbiting_the_sun numeric(10,2),
    moon_count integer,
    is_dwarf boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying NOT NULL,
    classification character varying(1),
    is_supergiant boolean NOT NULL,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: astronomer astronomer_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.astronomer ALTER COLUMN astronomer_id SET DEFAULT nextval('public.astronomers_astronomer_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: astronomer; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.astronomer VALUES ('nicolaus', 1473, 'Proposed the heliocentric model of the solar system — that the Earth and planets orbit the Sun rather than the Sun orbiting the Earth. This was revolutionary and challenged the Church''s geocentric view that had been accepted for over 1,000 years.', 1543, 1, 'copernicus', 'nicolaus copernicus');
INSERT INTO public.astronomer VALUES ('galileo', 1564, 'Using an improved telescope he built himself, Galileo discovered Jupiter''s four largest moons (now called the Galilean moons — Io, Europa, Ganymede, Callisto), observed the phases of Venus, and confirmed the heliocentric model. He was famously put under house arrest by the Church for his findings.', 1642, 2, 'galilei', 'galileo galilei');
INSERT INTO public.astronomer VALUES ('edwin', 1889, 'Discovered that the universe is expanding and that galaxies beyond the Milky Way exist. Before Hubble, most astronomers believed the Milky Way was the entire universe. He also developed the Hubble classification system for categorising galaxy shapes. The Hubble Space Telescope is named in his honour.', 1953, 3, 'hubble', 'edwin hubble');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'milky way', 'Composed of ~200-400 billion stars, gas, dust, and dark matter.', true, NULL);
INSERT INTO public.galaxy VALUES (2, 'andromeda', 'Composed of ~1 trillion stars, gas, dust, and dark matter.', true, NULL);
INSERT INTO public.galaxy VALUES (3, 'trianulum', 'Composed of ~40 billion stars, abundant gas and dust — one of the more gas-rich galaxies. ', true, NULL);
INSERT INTO public.galaxy VALUES (4, 'Large Magellanic Cloud', 'Composed of stars, gas, and dust — a dwarf irregular galaxy.', true, NULL);
INSERT INTO public.galaxy VALUES (5, 'Whirlpool Galaxy', 'Composed of billions of stars, gas, dust, and dark matter.', true, NULL);
INSERT INTO public.galaxy VALUES (6, 'Sombrero Galaxy', 'Composed of billions of stars, a prominent dust lane, and a large central bulge.', true, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'moon', 388400, 'Has the Stickney Crater, a massive impact crater nearly half the width of Phobos itself);
3. Deimos — 23,463 km — Has an unusually smooth surface due to loose regolith (dust/debris) filling in its craters', 3);
INSERT INTO public.moon VALUES (2, 'phobos', 9376, 'Has the Stickney Crater, a massive impact crater nearly half the width of Phobos itself);
3. Deimos — 23,463 km — Has an unusually smooth surface due to loose regolith (dust/debris) filling in its craters', 1);
INSERT INTO public.moon VALUES (4, 'io', 421700, 'Has Olympus Patera, one of over 400 active volcanoes constantly reshaping its surface', 4);
INSERT INTO public.moon VALUES (5, 'europa', 670900, 'Has a criss-cross network of cracks (lineae) across its ice shell caused by tidal flexing', 4);
INSERT INTO public.moon VALUES (6, 'ganymede', 1070400, 'Is the only moon with its own magnetic field, creating its own auroras', 4);
INSERT INTO public.moon VALUES (7, 'callisto', 1882700, 'Has Valhalla, one of the largest impact craters in the solar system at ~3,800 km wide', 4);
INSERT INTO public.moon VALUES (8, 'amalthea', 181366, 'Radiates more heat than it receives from the Sun, likely due to Jupiter''s magnetic field', 4);
INSERT INTO public.moon VALUES (9, 'titan', 1221870, 'Has Kraken Mare, a vast liquid methane sea larger than the Caspian Sea', 2);
INSERT INTO public.moon VALUES (10, 'encaladus', 238020, 'Has Tiger Stripes, four parallel fissures near its south pole that spray water vapor into space', 2);
INSERT INTO public.moon VALUES (11, 'mimas', 185539, 'Has the Herschel Crater, 130 km wide and so large it nearly shattered the moon', 2);
INSERT INTO public.moon VALUES (12, 'rhea', 527108, 'May have a faint ring system of its own, which would make it the only moon known to have rings', 2);
INSERT INTO public.moon VALUES (13, 'dione', 377396, 'Has Virgae (wispy terrain), bright ice cliffs formed by tectonic fractures', 2);
INSERT INTO public.moon VALUES (14, 'tethys', 294619, 'Has Ithaca Chasma, a giant canyon system stretching 2,000 km across its surface', 2);
INSERT INTO public.moon VALUES (15, 'iapetus', 3560820, 'Has the Equatorial Ridge, a mysterious mountain range running along its equator up to 20 km high', 2);
INSERT INTO public.moon VALUES (16, 'titania', 435910, 'Has Messina Chasmata, a massive fault canyon stretching over 1,500 km', 5);
INSERT INTO public.moon VALUES (17, 'oberon', 583520, 'Has a dark reddish material coating the floors of its craters, possibly from ancient volcanic activity', 5);
INSERT INTO public.moon VALUES (18, 'miranda', 129390, 'Has Verona Rupes, a cliff estimated at 20 km tall — one of the tallest known in the solar system', 5);
INSERT INTO public.moon VALUES (19, 'triton', 354759, 'Has active nitrogen geysers that shoot plumes 8 km into its thin atmosphere', 6);
INSERT INTO public.moon VALUES (20, 'charon', 19591, 'Has Mordor Macula, a large dark reddish polar cap believed to be made of trapped atmospheric gases from Pluto', 10);
INSERT INTO public.moon VALUES (3, 'deimos', 23463, 'Has an unusually smooth surface due to loose regolith (dust/debris) filling in its craters', 1);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'mars', 228000000, 3390, 24.60, 2, NULL, 1);
INSERT INTO public.planet VALUES (2, 'saturn', 1400000000, 120500, 10.70, 146, NULL, 1);
INSERT INTO public.planet VALUES (3, 'earth', 150000000, 12756, 23.90, 1, NULL, 1);
INSERT INTO public.planet VALUES (4, 'jupiter', 778000000, 69911, 9.90, 4, NULL, 1);
INSERT INTO public.planet VALUES (6, 'neptune', 4500000000, 49528, 16.00, 16, NULL, 1);
INSERT INTO public.planet VALUES (5, 'uranus', 2900000000, 51118, 17.00, 28, NULL, 1);
INSERT INTO public.planet VALUES (7, 'mercury', 70000000, 2440, 2191.20, NULL, NULL, 1);
INSERT INTO public.planet VALUES (8, 'venus', 108000000, 12104, 5807.70, NULL, NULL, 1);
INSERT INTO public.planet VALUES (9, 'ceres', 413000000, 476, 40199.80, NULL, true, 1);
INSERT INTO public.planet VALUES (10, 'pluto', 5900000000, 1477, 2174292.00, 5, true, 1);
INSERT INTO public.planet VALUES (11, 'haumea', 6500000000, 1740, 2497410.00, 2, true, 1);
INSERT INTO public.planet VALUES (12, 'makemake', 6847000000, 715, 2497410.00, 2672730, true, 1);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'the sun', 'G', false, 1);
INSERT INTO public.star VALUES (2, 'sirius', 'A', false, 1);
INSERT INTO public.star VALUES (3, 'betelgeuse', 'M', true, 1);
INSERT INTO public.star VALUES (6, 'rigel', 'B', true, 1);
INSERT INTO public.star VALUES (4, 'polaris', 'F', true, 1);
INSERT INTO public.star VALUES (5, 'antares', 'M', true, 1);


--
-- Name: astronomers_astronomer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.astronomers_astronomer_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: astronomer astronomers_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.astronomer
    ADD CONSTRAINT astronomers_name_key UNIQUE (name);


--
-- Name: astronomer astronomers_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.astronomer
    ADD CONSTRAINT astronomers_pkey PRIMARY KEY (astronomer_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

