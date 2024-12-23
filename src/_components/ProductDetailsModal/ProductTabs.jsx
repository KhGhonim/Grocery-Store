"use client";
import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
     <div className="mt-12">
      {/* Tab Headers */}
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'description'
              ? 'text-green-500 border-b-2 border-green-500'
              : 'text-gray-500 hover:text-green-500'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('packaging')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'packaging'
              ? 'text-green-500 border-b-2 border-green-500'
              : 'text-gray-500 hover:text-green-500'
          }`}
        >
          Packaging & Delivery
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'description' ? (
          <div className="space-y-6">
            <p className="text-gray-600">
              Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness 
              and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic 
              hungrily some and dear furiously this apart.
            </p>
            <p className="text-gray-600">
              Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought 
              much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa 
              far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-medium mb-4">Type Of Packing</h4>
                <p className="text-gray-600">Bottle</p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Color</h4>
                <p className="text-gray-600">Green, Pink, Powder Blue, Purple</p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Quantity Per Case</h4>
                <p className="text-gray-600">100ml</p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Ethyl Alcohol</h4>
                <p className="text-gray-600">70%</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-600">
              Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously 
              hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this 
              jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after 
              jeez enchanting drunkenly more much wow callously irrespective limpet.
            </p>
            <p className="text-gray-600">
              Scallop or far crud plain remarkably far by thus far iguana lewd precociously and less rattlesnake contrary 
              caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less 
              well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some 
              wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Suggested Use</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Refrigeration not necessary.</li>
                <li>Stir before serving</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
 
  )
}
