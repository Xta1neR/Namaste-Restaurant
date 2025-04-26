import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div>
      {/* ----------------- Appetizers ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Appetizers</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable Samosas
                    </h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Two savoury triangular pastries filled with spiced potatoes
                    & peas. Served with tamarind chutney.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Aloo Tikki</h3>
                    <span className="font-semibold text-white">$7.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Three crispy spiced potato patties served with tamarind
                    chutneys. It is a popular street food in India
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable Pakoras
                    </h3>
                    <span className="font-semibold text-white">$9.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Deep fried mixed vegetable fritters.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Paneer Fingers</h3>
                    <span className="font-semibold text-white">$11.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Deep fried Indian cheese fitters.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chicken Pakora</h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chicken breast coated in chickpea batter & deep fried.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Butter Chicken Poutine
                    </h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Creamy butter chicken served on top of hot French fries &
                    melting cheese.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Aloo Tikki Chat
                    </h3>
                    <span className="font-semibold text-white">$11.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Crispy Aloo Tikkis are Topped with chickpeas masala & served
                    with chutney, onion, tomatoes & yogurt.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Fish Pakora</h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Traditional fried basa fish coated in chickpea our, rice our
                    & cornstarch.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Calamari</h3>
                    <span className="font-semibold text-white">$14.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Calamari deep fried and served with tarter sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Spring Roll</h3>
                    <span className="font-semibold text-white">$8.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Roll of thin pastry, filed with vegetables.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Fish and Chips (1pcs/2pcs)
                    </h3>
                    <span className="font-semibold text-white">
                      $11.95 / $15.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    2 pieces of crispy battered cod served with fries and tartar
                    sauce
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chat Papdi</h3>
                    <span className="font-semibold text-white">$20</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Crisp fried dough wafers mixed with chickpeas & potatoes,
                    dipped in yogurt & chutney.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chole Samosas Chat
                    </h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Two savory samosas topped with chickpeas masala and served
                    with chutney
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Sharing Plates ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Sharing Plates</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Namaste Special Set
                    </h3>
                    <span className="font-semibold text-white">$23.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Two pieces of each: Tandoori Chicken, Garlic Chicken Tikka,
                    Saffron Chicken Tikka, green chicken tikka ,fish and prawns,
                    all barbecued in our clay oven and served with mint chutney.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Veggie Platter</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Samosas, pakora, spring roll & paneer fingers served with
                    mint & tomarind chutney.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Tandoori Delight
                    </h3>
                    <span className="font-semibold text-white">$23.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Three pieces of each: Tandoori Chicken, Garlic
                    ChickenTikka,saffron Chicken Tikka, green chicken tikka ,
                    all barbecued in our clay oven and served with mint chutney.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Salads ---------------------- */}

      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Salads</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Caesar Salad</h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Romaine lettuce tossed with Caesar dressing & crunchy
                    croutons. Sprinkled with freshly grated parmesan.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Greek Salad</h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Diced tomato, cucumber, feta cheese, red onion, pepper
                    olives & Greek dressing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Indian Salad</h3>
                    <span className="font-semibold text-white">
                      Starter Size $7.00/ Entree Size $10.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Freshly sliced carrots, tomatoes, cucumbers & onions.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Garden Salad</h3>
                    <span className="font-semibold text-white">
                      Starter Size $7.00/ Entree Size $10.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Freshly cut romaine, diced cucumber, tomatoes, carrots,
                    onion, with lemonade dressing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Soup ---------------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Soup</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Tomato Soup</h3>
                    <span className="font-semibold text-white">$5.00</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Creamy Tomato Soup
                    </h3>
                    <span className="font-semibold text-white">$5.95</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Cream of Chicken Soup
                    </h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Deep fried mixed vegetable fritters. */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lentil Soup</h3>
                    <span className="font-semibold text-white">$5.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Traditional fried basa fish coated in chickpea our, rice our
                    & cornstarch.{" "} */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Vegetable Soup</h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Calamari deep fried and served with tarter sauce. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Namaste Special Soup
                    </h3>
                    <span className="font-semibold text-white">$7.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chicken, prawn and vegetables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Kids Specialities ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Kids Specialities</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Fries</h3>
                    <span className="font-semibold text-white">$7.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    French fries served with ketchup.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Wings</h3>
                    <span className="font-semibold text-white">$13.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    BBQ ,hot , butter chicken sauce , honey garlic .
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Bite with Fries
                    </h3>
                    <span className="font-semibold text-white">$10.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Traditional fried basa fish coated in chickpea our, rice our
                    & cornstarch.{" "} */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Fish & Chips 1pcs/2pcs
                    </h3>
                    <span className="font-semibold text-white">
                      $11.95 / $15.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    2 pieces of crispy battered cod served with fries and tartar
                    sauce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Tandoori Breads ---------------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Tandoori Breads</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Plain Naan</h3>
                    <span className="font-semibold text-white">$2.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Two savoury triangular pastries filled with spiced potatoes
                    & peas. Served with tamarind chutney. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Garlic Naan</h3>
                    <span className="font-semibold text-white">$3.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Three crispy spiced potato patties served with tamarind
                    chutneys. It is a popular street food in India */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Tandoori Roti</h3>
                    <span className="font-semibold text-white">$2.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Traditional fried basa fish coated in chickpea our, rice our
                    & cornstarch.{" "} */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Butter Naan</h3>
                    <span className="font-semibold text-white">$3.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Calamari deep fried and served with tarter sauce. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Tandoori Stuffed Breads ---------------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">
          Tandoori Stuffed Breads
        </h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Cheese & Spinach Naan
                    </h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Naan bread stuffed with chopped spinach, cheese & grated
                    Indian cheese.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Peshawari Naan</h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Naan bread stuffed with shredded coconut, raisins & cashews.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken & Cheese Naan
                    </h3>
                    <span className="font-semibold text-white">$6.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Naan bread stuffed with chicken & cheese
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Aloo Naan</h3>
                    <span className="font-semibold text-white">$5.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Naan bread stuffed with potatoes & cilantro{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Aloo Parantha</h3>
                    <span className="font-semibold text-white">$5.00</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Whole wheat bread stuffed with potatoes and authentic spices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Tandoori Sizzlers -------------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Tandoori Sizzlers</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Garlic Chicken Tikka
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chickenpieces marinated with garlic & exotic Indian
                    spices. Cooked in our Indian clay oven & served with mint
                    chutney. Served on rice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Saffron Chicken Tikka
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chickenpieces marinated with cream cheese, saffron
                    & exotic Indian spices. Cooked in our Indian clay oven &
                    served with mint chutney. Served on rice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Green Chicken Tikka
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken pieces marinated with fresh mint, cilantro
                    & exotic Indian spices. Cooked in our Indian clay oven &
                    served with mint chutney. Served on rice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Tandoori Chicken 4pcs/8pcs
                    </h3>
                    <span className="font-semibold text-white">
                      $15.95/$22.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chicken marinated with yogurt & exotic Indian spices. Cooked
                    in our Indian clay oven & served with mint chutney.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Kasturi Shashlic Paneer Tikka
                    </h3>
                    <span className="font-semibold text-white">$19.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Indian cheese, onion and bell peppers marinated in yogurt,
                    fenugreek leaves & spices. Cooked in our Indian clay oven &
                    served with mint chutney.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Tandoori Fish Tikka
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Basa fish marinated with ginger, garlicand exotic Indian
                    spices. Cooked in our Indian clay oven & served with mint
                    chutney. Served on rice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Tandoori Prawns Tikka
                    </h3>
                    <span className="font-semibold text-white">$19.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Tiger prawns marinated with ginger, garlic & exotic Indian
                    spices. Cooked in our Indian clay oven and served with mint
                    chutney. Served on rice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- Indo Chinese Style ------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Indo Chinese Style</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Spring Rolls</h3>
                    <span className="font-semibold text-white">$9.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Roll of thin pastry, filled with vegetables.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Veg Manchurian (Dry/Gravy)
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fried vegetable balls cooked sweet and tangy Chinese sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Manchurian (Dry/Gravy)
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken pieces cooked sweet and tangy Chinese
                    sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chilli Chicken (Dry/Gravy)
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken pieces prepared with onion and bell pepper,
                    blended with Chinese sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chilli Paneer (Dry/Gravy)
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Pieces of paneer prepared with onion and bell pepper,
                    blended with Chinese sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chilli Prawn (Dry/Gravy)
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawn prepared with onion and bell pepper, blended with
                    Chinese sauce.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Veg Chowmien</h3>
                    <span className="font-semibold text-white">$14.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Rice noodles stir fried with Chinese sauces and vegetables.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Veg Chowmien</h3>
                    <span className="font-semibold text-white">$14.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Rice noodles stir fried with Chinese sauces and vegetables.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Chowmien
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Rice noodles stir-fry with chicken, Chinese sauces, and
                    vegetables.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Veg Fried Rice</h3>
                    <span className="font-semibold text-white">$14.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Cooked rice stir-frywith vegetables and Chinese sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Fried Rice
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Cooked rice stir-frywith chicken and Chinese sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Prawn Fried Rice
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Cooked rice stir-frywith Prawn and Chinese sauce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Vegetarian Specialties ---------------------- */}

      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Vegetarian Specialties</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Aloo Gobhi</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fresh cauliflower & potatoes cooked with onions, tomatoes &
                    spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Baingan Bharta</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Mashed eggplant cooked with onion & spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Mixed Vegetables
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Seasonal fresh vegetables cooked in exotic Indian spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chana Masala</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chick peas cooked with tomatoes,ginger,onions & garnished
                    with fresh cilantro
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Matar Mushroom</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fresh mushroom & green pees cooked in a fine onion & tomato
                    sauce with garlic & ginger
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable Mango Curry
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fresh vegetables cooked in mango sauce & exotic spices.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Green Vegetable Curry
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Seasonal vegetables cooked with a fine paste of broccoli,
                    mint, spinach, cilantro, green pepper & herbs.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Dal Makhani</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Lentils cooked in garlic onions aromatic spices & tempered
                    with butter{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Dal Fry</h3>
                    <span className="font-semibold text-white">$14.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Yellow lentils cooked with butter,garlic, onions & whole
                    spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Malai Kofta</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Grated indian cheese dumplings cooked in creamy onion sauce
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Veg Jalfrezi</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Mixed veggies cooked with onions, green peppers, ginger,
                    garlic & dash of vinegar
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable coconut curry
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fresh vegetable cooked in coconut cream and royal spices
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable Shahi Korma
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Mixed vegetables delicately cooked in a seasoned, creamy
                    sauce with onion & cashews.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Bhindi Masala</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Masala okra cooked with onions,tomatoes and tangy spices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Panner Specialties ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Panner Specialties</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Palak paneer</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chopped spinach cooked delicately in ginger, garlic & onions
                    mixed with pieces of indian cheese.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Kadai paneer</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Indian cheese cooked with freshly sliced peppers, onions &
                    exotic spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Matar paneer</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Tender cubes of Indian cheese cooked with green peas in an
                    onion & tomato sauce with exotic spices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Shahi paneer</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Diced Indian cheese cooked in a thick sauce of onions, nuts
                    & cream with a hint of fenugreek leaves.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Paneer Makhani</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Indian cheese simmered in a tomato & butter gravy, topped
                    with cream.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chilli Paneer</h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Paneer prepared with bell peppers onion & exotic Indian
                    spices with chilli garlic saus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Chicken Specialities -------------------- */}

      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Chicken Specialities</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken tikka masala (CTM)
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast barbequed & simmered in a
                    thick gravy with onions fresh tomatoes & herbs finished with
                    fresh ginger & cilantro
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Butter chicken</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken breast marinated in ginger & garlic cooked
                    in a special butter tomato sauce
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Kadai chicken</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast cooked with green
                    chillies,tomatoes,green peppers,onions & ginger tempered
                    with coriander seeds
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Curry chicken</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken breast pieces cooked in onion tomato sauce
                    with ground spices
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Palak Chicken</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken breast cooked with chopped spinach and
                    freshly ground spices
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chilli Chicken</h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chicken breast cooked with bell peppers onion & exotic
                    Indian spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Saffron Curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast delicately cooked in a
                    creamy saffron sauce with onion & exotic spices.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Royal Curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast delicately cooked in a
                    tomato onion sauce with touch of korma sauceand exotic
                    spices.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken vindaloo
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast cooked in a tangy sauce
                    with potatoes,vinegar a speciality of Goa{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Coconut Curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless chicken breast cooked in a coconut cream & royal
                    spices
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken shahi korma
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast delicately cooked in a
                    seasoned cream sauce with onions and ground cashew nuts
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken mango curry
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Cooked in mango sauce and herbs with broccoli and mild
                    spice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Green chicken curry
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Cooked with cashew nut, mint, spinach, cilantro, green
                    peppers & herbs.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Madras Curry
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Chicken Pieces Cooked in Onion, Tomato, Coconut Sauce and
                    Spices. Tempered with mustard seeds.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Do Pyaza
                    </h3>
                    <span className="font-semibold text-white">$16.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless Meat cooked with onion, ginger & garlic gravy,
                    royal spices and sauteed diced onion and cilantro.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Black Pepper
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of chicken breast delicately cooked in a
                    creamy sauce with onion and exotic spices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- Lamb Specialties ---------------------- */}

      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Lamb Specialties</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Goat Curry</h3>
                    <span className="font-semibold text-white">$18.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Goat cooked in an onion & tomato sauce with authentic
                    spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb curry</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Lamb cooked in an onion & tomato sauce with authentic spice.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb Vindaloo</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless lamb simmered in a tangy curry sauce with potatoes
                    & rare spices. Our famous,fiery Goan speciality.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Palak Gosh (Lamb)
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless lamb cooked with blanched spinach & Indian spices
                    in an onion & tomato sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Lamb rogan josh
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless lamb cooked in onion, ginger & garlic. A signature
                    recipe of Kashmiri cuisine.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb Do Pyaza</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless Meat cooked with onion, ginger & garlic gravy,
                    royal spices and sauteed diced onion and cilantro.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb Masala</h3>
                    <span className="font-semibold text-white">$11.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless pieces of lamb simmered in thick onion gravy.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      lamb Coconut Curry
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless lamb cooked in a coconut cream sauce with Indian
                    spices.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Lamb Shahi Korma
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Boneless lamb cooked delicately in a seasoned sauce made
                    with cashews, onions, tomatoes & cream.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Lamb mango curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Lamb cooked in mango sauce & herbs with broccoli & mild
                    spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Green lamb curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Lamb cooked with mint, spinach, green peppers, cilantro &
                    herbs.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Lamb madras curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Lamb Pieces Cooked in Onion, Tomato, Coconut Sauce and
                    Spices. Tempered with mustard seeds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- Seafood Specialties ----------------------- */}

      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Sea food Specialties</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Prawn masala</h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawns cooked with fresh tomato, bell peppers & onions in a
                    mildly spiced gravy.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Coconut prawn Curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawns cooked with royal spices in a coconut cream sauce.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Prawn Shahi korma
                    </h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawns delicately cooked in a sauce seasoned with onions,
                    cashews & cream.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Traditional Prawn curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawns cooked in an onion & tomato sauce with ground spices.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Coconut Curry Fish
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Basa fish delicately cooked in coconut cream and royal
                    spices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Traditional Fish curry
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawns cooked in an onion & tomato sauce with ground spices.{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Fish vindaloo</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Basa cooked with potatoes in a tangy sauce with coconut &
                    vinegar.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Fish masala</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Basa cooked with fresh onions & bell pepper in a thick
                    gravy.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Chilli Prawn</h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Prawn prepared with bell peppers onion & exotic Indian
                    spices with chilli garlic saus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Biryani Rice Specialties ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">
          Biryani Rice Specialties
        </h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Vegetable Biryani
                    </h3>
                    <span className="font-semibold text-white">$15.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Two savoury triangular pastries filled with spiced potatoes
                    & peas. Served with tamarind chutney. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Prawn Biryani</h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Three crispy spiced potato patties served with tamarind
                    chutneys. It is a popular street food in India */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb Biryani</h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Deep fried mixed vegetable fritters. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Lamb Biryani</h3>
                    <span className="font-semibold text-white">$18.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Deep fried Indian cheese fitters. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Chicken Biryani
                    </h3>
                    <span className="font-semibold text-white">$17.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Chicken breast coated in chickpea batter & deep fried. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Namaste Special Biryani
                    </h3>
                    <span className="font-semibold text-white">$19.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    Fresh vegetables, lamb, chicken & prawns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
        </div>
      </section>

      {/* -------------- Side Dishes ------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Side Dish</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Jeera Rice
                    </h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Basmati rice tempered with butter & cumin seeds
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Saffron Rice</h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Basmati rice cooked with fried onions & saffron.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Steamed Rice small / full
                    </h3>
                    <span className="font-semibold text-white">$2.25 / $3.50
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/*  */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Peas Pulao</h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Basmati rice tempered with fried onions & green peas.                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Coconut Rice</h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Basmati rice cooked with coconut milk & crushed coconut with curry leaves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- Dessets ------------ */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Desserts</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Gulab Jamun
                    </h3>
                    <span className="font-semibold text-white">$6.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Deep fried milk solids, served in a warm sugar syrup.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Rasmalai</h3>
                    <span className="font-semibold text-white">$6.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Homemade rich cheese served in milky cream.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Carrot Halwa
                    </h3>
                    <span className="font-semibold text-white">$6.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Made from fresh carrots & cream. Served hot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Rice Pudding</h3>
                    <span className="font-semibold text-white">$6.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Homemade rice pudding served with sliced almonds on top{" "}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Ice Cream</h3>
                    <span className="font-semibold text-white">$6.50</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                  Mango, strawberry, vanilla or chocolate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Extras ---------------- */}
      <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-3">Extras</h1>
        <div className="flex items-center gap-3 mb-14">
          <div className="border-t border-[#d99e5f] w-24"></div>
          <span className="text-[#d99e5f] text-2xl">
            <FontAwesomeIcon icon={faBowlFood} />
          </span>
          <div className="border-t border-[#d99e5f] w-24"></div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* <!-- Left Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Papadum
                    </h3>
                    <span className="font-semibold text-white">$3.00</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Two savoury triangular pastries filled with spiced potatoes
                    & peas. Served with tamarind chutney. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Mixed Pickle</h3>
                    <span className="font-semibold text-white">$3.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Three crispy spiced potato patties served with tamarind
                    chutneys. It is a popular street food in India */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Raita
                    </h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Deep fried mixed vegetable fritters. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Mango Chutney</h3>
                    <span className="font-semibold text-white">$2.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Deep fried Indian cheese fitters. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Mint Chutney</h3>
                    <span className="font-semibold text-white">$1.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Chicken breast coated in chickpea batter & deep fried. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Tamarind Chutney
                    </h3>
                    <span className="font-semibold text-white">$1.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Creamy butter chicken served on top of hot French fries & */}
                    {/* melting cheese.{" "} */}
                  </p>
                </div>
            
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className="space-y-10">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Add Chicken</h3>
                    <span className="font-semibold text-white">$4.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Traditional fried basa fish coated in chickpea our, rice our
                    & cornstarch.{" "} */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Add Lamb</h3>
                    <span className="font-semibold text-white">$5.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Calamari deep fried and served with tarter sauce. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Add Prawns</h3>
                    <span className="font-semibold text-white">$5.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Roll of thin pastry, filed with vegetables. */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">
                      Add Steamed Vegetables (12 oz)
                    </h3>
                    <span className="font-semibold text-white">
                      $4.95
                    </span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* 2 pieces of crispy battered cod served with fries and tartar
                    sauce */}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                    <h3 className="font-semibold text-white">Side of Red Onions </h3>
                    <span className="font-semibold text-white">$2.95</span>
                  </div>
                  <p className="text-[#d99e5f] text-xs mt-1">
                    {/* Crisp fried dough wafers mixed with chickpeas & potatoes,
                    dipped in yogurt & chutney. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
