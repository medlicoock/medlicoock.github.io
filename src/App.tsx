import React from 'react'

function App() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/MEDLI.png")' }}>
      <div className="min-h-screen bg-black/50 p-8">
        <div className="max-w-4xl mx-auto text-white space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">CHALLENGE</h2>
            <p className="text-lg">
              An increasing number of companies see the potential of AI at the 'edge' of the network, i.e., performing local data processing to enable real-time decisions without relying on the cloud. At the same time, modern deep-learning models are growing larger at a rapid pace, making it challenging to deploy them on edge devices with limited computing power and memory.
            </p>
            <p className="text-lg">On top of that, companies often struggle with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Specializing (transfer learning) and sufficiently "compressing" large pre-trained AI models so they can run both quickly and accurately on edge platforms.</li>
              <li>Choosing the best combination of edge hardware and software for their specific needs.</li>
              <li>Monitoring deployed AI models in operation, so they can quickly detect and address declines in performance or accuracy.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">PROJECT GOALS</h2>
            <p className="text-lg">
              Within the <strong>MEDLI</strong> project (<strong>M</strong>aking <strong>E</strong>dge <strong>AI</strong> <strong>D</strong>eployment <strong>L</strong>ight and <strong>I</strong>mpactful), we tackle these challenges and provide practical, industry-ready solutions. We consolidate state-of-the-art knowledge into a user-friendly approach that allows companies to:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">1. Accelerate edge AI model development</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Leverage pre-trained deep learning models and transfer-learning techniques.</li>
                  <li>Compress these models (e.g., pruning, quantization) to reduce their size while maintaining sufficient accuracy.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2. Easily select the right hardware and software</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>An overview of relevant edge hardware (GPU, TPU, CPU, etc.) and corresponding compilers & deployment tools.</li>
                  <li>Practical guidelines and decision trees: which solution best fits your application requirements?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">3. Monitor AI models in operation</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Best practices and tool overviews to keep tabs on a model's health (accuracy, errors, drift).</li>
                  <li>Automatic detection of performance drops, with triggers for re-training or other adjustments.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">4. Generic use cases and demonstrations</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>A sample use case on image processing (e.g. vision systems for quality inspection).</li>
                  <li>A sample use case on time-series data (e.g. vibration, sensor, or audio signals).</li>
                  <li>Both are fully worked out with step-by-step documentation, serving as a blueprint for companies.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">HOW DOES IT WORK?</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We collect and translate existing research outcomes on model compression, edge-hardware prototyping, and AI monitoring.</li>
              <li>We develop an intuitive graphical interface that lets you adapt and optimize pre-trained models using your own (limited) dataset.</li>
              <li>We provide guides, workshops, and webinars to get your R&D team up to speed.</li>
              <li>We offer follow-up activities for companies interested in taking the MEDLI approach further in their own applications.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">RESULTS</h2>
            <p className="text-lg">Companies joining or following MEDLI can:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Save time and effort</strong>: shorten the design cycle for edge AI models by up to 80%.</li>
              <li><strong>Make informed choices</strong>: rely on decision trees to pick the right hardware, compiler, and deployment approach.</li>
              <li><strong>Stay in control</strong>: easily monitor the performance of on-device AI and make timely adjustments.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">FOR WHOM?</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Industrial end-users (manufacturing, automotive, agriculture, energy, …) wanting real-time local data processing.</li>
              <li>Technology and software providers delivering AI solutions and looking to support edge-based deployments for their clients.</li>
              <li>System integrators building smart devices or production lines with on-site AI capabilities.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">PARTNERS</h2>
            <p className="text-lg">
              This project is an initiative by <strong>KULeuven</strong> and <strong>Flanders Make</strong>, in close collaboration with various industry partners. Through VLAIO's COOCK program, we aim to bridge the gap between academic expertise and real-world industrial applications.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">CONTACT</h2>
            <p className="text-lg">Interested in how MEDLI can boost your edge AI deployment or want to join the user group? Get in touch:</p>
            <div className="ml-4">
              <p className="font-semibold">Marjolein Deryck, project manager</p>
              <p>Email: <a href="mailto:marjolein.deryck@kuleuven.be" className="text-blue-300 hover:text-blue-400 underline">marjolein.deryck@kuleuven.be</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App 